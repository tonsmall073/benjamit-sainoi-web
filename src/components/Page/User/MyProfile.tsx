import { englishDate } from '@/utils/dateFormat';
import React from 'react';
import { Container, Card, Button, Image } from 'react-bootstrap';

const MyProfile = ({ user = {} as any }) => {
    return (
        <>
            <Image
                src={user?.profilePicture ?? '/default-profile.png'} // เพิ่มภาพดีฟอลต์
                roundedCircle
                alt="Profile Picture"
                style={{ width: '150px', height: '150px' }}
            />
            <Card.Title className="mt-3">{user?.name ?? "-"}</Card.Title>
            <Card.Text>
                <strong>Email:</strong> {user?.email ?? "-"}<br />
                <strong>Fullname:</strong> {`${user?.prefixName ?? ""}${user?.firstname ?? ""} ${user?.lastname}`}<br />
                <strong>Birthday:</strong> {englishDate(user?.birthday) ?? "-"}
            </Card.Text>
            <Button variant="primary">Edit Profile</Button>
        </>
    );
};

export default MyProfile;
