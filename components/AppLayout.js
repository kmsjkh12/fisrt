/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Menu ,Input ,Row ,Col} from 'antd';
import {useSelector} from 'react-redux'
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
const AppLayout = ({children}) =>{
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    return (
        
        <div>
            <Menu mode="horizontal">
                <Menu.Item><Link href='/'><a>노드버드</a></Link></Menu.Item>
                <Menu.Item><Link href='/profile'><a>프로필</a></Link></Menu.Item>
                <Menu.Item><Input.Search enterButton style={{verticalAlign:'middle'}} /></Menu.Item>
                <Menu.Item><Link href='/signup'><a>노드버드</a></Link></Menu.Item>
            </Menu>
            <Row gutter={8}> 
                <Col xs={24} md={6} >
                {isLoggedIn ? <UserProfile />: <LoginForm />}
                </Col>
                <Col xs={24} md={12} >
                {children}
                </Col>
                <Col xs={24} md={6} >
                오른쪽메뉴
                </Col>

            </Row>
        <div> 
        </div>
        </div>

   


    );
};
AppLayout.propTypes ={ //타입 검사 children : 리액트의 노드 return 안의 값
    children : PropTypes.node.isRequired, 
}

export default AppLayout;