import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getDictionary } from '@/locales/dictionary'
import { loginApi } from '@/serviceApis/userApi'
import axios from 'axios';

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token = { user: user }
      }
      return token;
    },
    async session({ session, token }) {
      session.user = { ...token.user }

      return session;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { type: 'string' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }

        const { username, password } = credentials
        const resLogin = await loginApi(username, password)
        if (axios.isAxiosError(resLogin)) {
          throw new Error(resLogin?.response?.data?.messageDesc ?? "")
        } else if (resLogin instanceof Error) {
          throw new Error(resLogin?.message ?? "")
        }
        const dict = await getDictionary()
        if (!resLogin?.data?.data?.accessToken) {
          throw new Error(dict?.login?.message?.auth_failed ?? "")
        }

        return {
          accessToken: resLogin?.data?.data?.accessToken ?? "",
          birthday: resLogin?.data?.data?.birthday ?? "",
          firstname: resLogin?.data?.data?.firstname ?? "",
          lastname: resLogin?.data?.data?.lastname ?? "",
          nickname: resLogin?.data?.data?.nickname ?? "",
          prefixName: resLogin?.data?.data?.prefixName ?? "",
          username: resLogin?.data?.data?.username ?? "",
          uuid: resLogin?.data?.data?.uuid ?? "",
          profileImage: '/assets/img/avatars/8.jpg',
        };
      },
    }),
  ],
}
