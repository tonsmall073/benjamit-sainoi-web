
'use client'

import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useDictionary from '@/locales/dictionary-hook'
import MyProfile from '@/components/Page/User/MyProfile';
import { getProfile } from '@/serviceApis/userApi';
import axios from 'axios';
import { sweetAlertError } from '@/utils/globalSweetalert';

const Page = () => {
    const dict = useDictionary()

    const [userData, setUserData] = useState();
    const profile = async () => {
        try {
            const res = await getProfile()
            setUserData(res?.data?.data)
            if (res instanceof Error)
                throw res
            return true
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                sweetAlertError(String(error?.status), error?.response?.data?.messageDesc)
            } else {
                sweetAlertError("Error", error?.message ?? "")
            }
            return error
        }
    }

    useEffect(() => {
        profile();
    }, [])

    return (
        <Card className="mt-5">
            <Card.Header as="h5">{dict.profile.account.title}</Card.Header>
            <Card.Body>
                <MyProfile user={userData} />
            </Card.Body>
        </Card>

    );
};

export default Page;
