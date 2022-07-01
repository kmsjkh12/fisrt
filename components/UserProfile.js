import React, { useCallback } from 'react';
import {Avatar, Card, Button} from 'antd'
const UserProfile = ({setIsLoggedIn}) =>{

    const onLogout = useCallback(()=>{
        setIsLoggedIn(false);        
    },[])

    return(
       <Card 
       actions={[
        <div key="twit">짹짹<br />0</div>,
        <div key="followings">짹짹<br />0</div>,
        <div key="followings">짹짹<br />0</div> 
    ]}>
        <Card.Meta
       
        avatar={<Avatar>MOK</Avatar>} 
        title="MOKMOK"
        />
        <Button onClick={onLogout}>로그아웃</Button>
        </Card>

    );
};
export default UserProfile;
