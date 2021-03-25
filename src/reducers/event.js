import {READ_EVENTS} from '../actions'
import _ from 'lodash'

//reducer.jsにわたせるようにexport　reducerは関数として定義、引数はふたつ
export default(events = {}, action) => {//受け取ったタイプに応じてリターンで結果を返していく
  switch(action.type) {
    case READ_EVENTS:
      console.log(action.response.log)
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }

}
