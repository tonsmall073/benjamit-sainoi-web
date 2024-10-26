import { signOut } from 'next-auth/react';
import axios, { AxiosError } from 'axios';
import { sweetAlertWarning } from './globalSweetalert';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const handleAxiosAuthErrorToSignOut = async (error: AxiosError<any, any>) => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                await sweetAlertWarning(String(error.response.status), error?.response?.data?.messageDesc ?? "")
                await signOut({ callbackUrl: '/login' })
                while (true) {
                    await sleep(3000);
                }
            }
        }
    }
};