import React, { useCallback, useState } from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link'
import styled from 'styled-components';

const ButtonWrapper = styled.div`
margin-top: 10px;
`
const FormWapper= styled(Form)`
padding:10px;
`

const LoginForm = ({setIsLoggedIn}) =>{
const [Id, setId ]= useState('');
const [password, setPassword] =useState('');

const onChangeId=useCallback((e)=>{
    setId(e.target.value)
},[])

const onChangePw=useCallback((e)=>{
    setPassword(e.target.value)

},[])

const onSubmitForm=useCallback(()=>{
    console.log(Id,password);
    setIsLoggedIn(true);
},[Id,password]);


    return(
      <FormWapper onFinish={onSubmitForm}> 
        <div>
            <label htmlFor='user-id'>아이디</label>
            <br />
            <Input 
            name="user-id" 
            value={Id} 
            onChange={onChangeId} 
            required/>
        </div>
        <div>
            <label htmlFor='user-pw'>비밀번호</label>
            <br />
            <Input 
            name="user-pw" 
            value={password}
            onChange={onChangePw}
            required/>
        </div>
        <ButtonWrapper>
            <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </ButtonWrapper>
      </FormWapper>
    );
};

export default LoginForm;
