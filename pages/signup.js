import React, {useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import {Form,Input, Checkbox, Button} from 'antd';
import useInput from '../hooks/useInput';
const Signup = () =>{
   
    const [Id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');

    const [password, onChangePw] = useInput('');
    const [passwordCheck, setpasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const [term, setTerm] = useState('')
    const [termError,setTermError] = useState(false);

    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);

    })
    const onChangePasswordCheck = useCallback((e)=>{
        setpasswordCheck(e.target.value)
        setPasswordError(e.target.value!==password);
    },[password])

    const onSubmit = useCallback(()=>{

        if(password !==passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(Id,nick,password)
    },[password,passwordCheck,term])
    return(
        <AppLayout>
        <Head>
        <title> 회원가입!</title>
        </Head>

        <Form onFinish={onSubmit} >
            <div>
        <label htmlFor='user-id'>아이디</label>
            <br />
            <Input 
            name="user-id" 
            value={Id} 
            onChange={onChangeId} 
            required
            />
            </div>
            <div>
        <label htmlFor='user-nick'>닉네임</label>
            <br />
            <Input 
            name="user-nick" 
            value={nick} 
            onChange={onChangeNick} 
            required
            />
        <label htmlFor='user-password'>비밀번호</label>
            <br />
            <Input 
            name="user-password" 
            value={password} 
            onChange={onChangePw} 
            required
            />
            <label htmlFor='user-password-check'>비밀번호 체크</label>
            <br />
            <Input 
            name="user-password-check" 
            value={passwordCheck} 
            onChange={onChangePasswordCheck} 
            required
            />
            {passwordError && <div style={{color:'red'}}> 일치하지않습니다 </div>}
        </div>
        <div>
            <Checkbox name = "user-term" checked={term} onChange={onChangeTerm}> 동의합니다</Checkbox>
            {termError && <div style={{color:'red'}} >동의합니다 </div>}
        </div>
        <div style={{marginTop:10}}> <Button type='primary' htmlType='submit'>제출하기</Button></div>
        </Form>
        </AppLayout>
    )
}

export default Signup;