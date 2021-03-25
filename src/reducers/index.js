import {combineReducers } from 'redux'//reducerを結合するための関数
import events from './event'//countアプリで処理する状態をもつ

//あとでつかうのでexportしとく
export default combineReducers({ events})//通常アプリは複数reducerかく{foo,baa,baz}など