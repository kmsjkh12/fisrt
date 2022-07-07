
import React, { useCallback ,useState} from "react";
import {Form, Input,Button} from 'antd';
import { useDispatch, useSelector } from "react-redux";
import addPost from '../reducers/post'
import useInput from "../hooks/useInput";

const PostForm = () =>{
    const dispatch = useDispatch();
    const onSubmit =useCallback(()=>{
        dispatch(addPost);
    },[]);

    
    const {imagePaths} =useSelector((state) => state.post);
    const [text,onChangeText] = useInput('');
    
return(
    <Form style={{margin : '10px 0 20px'}} encType ="multipart/form-data" onFinish={onSubmit} >
        <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 이었나요 "
        />
    
    <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{float: 'right'}} htmlType="submit">짹쨱 </Button>
    </div>
    <div>
        {imagePaths.map((v)=>(
            <div key={v} style={{display:'inline-block'}}>
                <img src={v} style={{width:'200px'}} />
                <div><Button>제거 </Button>
                    </div>
                </div>
        ))}
    </div>
    
    </Form>
)
};

export default PostForm;