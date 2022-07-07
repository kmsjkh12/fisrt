import React from 'react';
import Head from 'next/head';
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';
import AppLayout from '../components/AppLayout';
const Profile =() =>{

    const followerList = [{nickname:'강경목'},{nickname:'바보'},{nickname:'노드버드오피셜'}];
    const followingList = [{nickname:'김경목'},{nickname:'바보2'},{nickname:'노드버드오22피셜'}];
    return(
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
        <NickNameEditForm />
        <FollowList header="팔로잉목록" data={followerList} />
        <FollowList header="팔로워목록" data ={followingList} />
        </AppLayout>
        </>
    )
}
export default Profile;
