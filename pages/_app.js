//페이지에 공통되는것 처리
//pages 파일 return 값 다 불러옴
import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';
const Nordbird= ({Component}) =>{
    return(
        <Component />
    )
}

Nordbird.propTypes ={
    Component:PropTypes.elementType.isRequired,
}
export default wrapper.withRedux(Nordbird);