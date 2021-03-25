import React,　{ Component }　from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'//繰り返しの処理があるとき必要？

import {readEvents } from '../actions'
class EventsIndex extends Component {//constructoeいらないreduxは
  componentDidMount() {
    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render() {
    return(

     <table>
       <thead>
         <tr>
           <th>ID</th>
           <th>Title</th>
           <th>Body</th>
         </tr>
       </thead>
       <tbody>
         {this.renderEvents()}
       </tbody>
     </table>
)}}
//実態をかいていく
//stateから必要な情報をとりだしてコンポーネント内にpropsとしてマッピbング引数にはどう言った情報をやるか
const mapStateToProps = state => ({events: state.events})
//あるアクションが発生したときにタイプに応じて状態遷移を実行させる　dispatchは関数
//+ー両方できるように
const mapDispatchToProps = ({ readEvents })
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);//実行させる
