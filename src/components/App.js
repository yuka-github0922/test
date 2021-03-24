import React,　{ Component }　from 'react';
import { connect } from 'react-redux'

import {increment, decrement } from '../actions'
class App extends Component {//constructoeいらないreduxは
  render() {
    const props = this.props//状態を渡しておくのでいれておく
    return(
    <React.Fragment>
     <div>value: {props.value}</div>
      <button onClick = {props.increment}>+1</button>
      <button onClick = {props.decrement}>-1</button>
    </React.Fragment>
)}}
//実態をかいていく
//stateから必要な情報をとりだしてコンポーネント内にpropsとしてマッピbング引数にはどう言った情報をやるか
const mapStateToProps = state => ({value:state.count.value})
//あるアクションが発生したときにタイプに応じて状態遷移を実行させる　dispatchは関数
//+ー両方できるように
const mapDispatchToProps = dispatch => ({
  increment:() => dispatch(increment()),
  decrement:() => dispatch(decrement())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);//実行させる
