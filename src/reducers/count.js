import {INCREMENT, DECREMENT} from '../actions'
const initialState = { value: 0 }

//reducer.jsにわたせるようにexport　reducerは関数として定義、引数はふたつ
const countEvent = (state = initialState, action) => {//受け取ったタイプに応じてリターンで結果を返していく
  switch(action.type) {
    case INCREMENT:
      return { value: state.value + 1}
    case DECREMENT:
      return { value: state.value - 1}
      default:
        return state
  }

}
export default countEvent