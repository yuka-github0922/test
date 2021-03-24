//reducerをもとに作成
//すべての場所でSTOREが使えるようにする

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';//元々用意されている
import {Provider} from 'redux';//特殊コンポーネント、作成したSTOREを全コーポネントに渡すため

import './index.css';
import reducer from ',./reducers'//前回作成したもの
import App from './components/App';//見通ししやすいよにディレクトリをつくってここにいれておく
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)//アプリ内で唯一のもの　全てのstateはここに集約されている

//集約されているとリレー形式で渡す必要がなくなった
//providerをつかってAPPコンポーネントをラップしてSTORE属性にSTOREをわたす。これだけでOK
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

