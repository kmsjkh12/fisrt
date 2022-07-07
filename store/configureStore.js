import { applyMiddleware, compose, createStore } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';


const configureStore = () =>{
    const middlewares= [];
    const enhancer = process.env.NODE_ENV ==='production'
    ? compose(applyMiddleware(...middlewares))             //데브툴 연결x
    : composeWithDevTools(applyMiddleware(...middlewares)) //데브툴 연결o 히스토리 쌓이면 메모리가 어떻게 변하는지 보이는지 보안에 취약함 
    const store = createStore(reducer,enhancer);
    return store;
} // 스토어 = 중앙처리장치 + 리듀서

const wrapper = createWrapper(configureStore, {debug:process.env.NODE_ENV==='development',
});

export default wrapper;