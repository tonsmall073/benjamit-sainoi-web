
import { handleAxiosAuthError } from "@/utils/handleAxiosAuthError";
import axios, { AxiosError, AxiosResponse } from "axios"
import { getSession, signOut } from 'next-auth/react';

export const loginApi = async (user: string, pass: string): Promise<AxiosResponse<any, any>> => {
    try {
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_V1_BASE_URL}/user/login`,
            { username: user, password: pass },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        return res
    } catch (error: any) {
        return error
    }
}

export const getProfile = async (): Promise<AxiosResponse<any, any>> =>{
    try {
        const session = await getSession();
        const accessToken = session?.user?.accessToken;
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_V1_BASE_URL}/user/profile`,
            {
                headers: {
                    "Authorization" :`Bearer ${accessToken}`
                }
            }
        )
        return res
    } catch (error: any) {
        await handleAxiosAuthError(error)
        return error;
    }
}