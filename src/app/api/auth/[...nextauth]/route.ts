import NextAuth, { User } from 'next-auth'
import { authOptions } from '@/app/api/auth/option'

declare module 'next-auth' {
  interface User {
    accessToken: string,
    birthday: Date,
    firstname: string,
    lastname: string,
    nickname: string,
    prefixName: string,
    username: string,
    uuid: string
    id?:string
    password?:string
    profileImage?:string
  }

  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
