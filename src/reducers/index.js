import {combineReducers } from 'redux'//reducerを結合するための関数
import count from './count'//countアプリで処理する状態をもつ

//あとでつかうのでexportしとく
export default combineReducers({ count})//通常アプリは複数reducerかく{foo,baa,baz}など