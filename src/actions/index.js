//actionとはJavascriptのライブラリのこと
//アクションを定義アクションreturn
//のちに適切な状態宣言をするための仕組みを作っている
import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'//この文字列はreducerでつかう

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch =>{//コンポーネント側で使うからexportしとく
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  console.log(response)
  dispatch({type: READ_EVENTS, response})
}