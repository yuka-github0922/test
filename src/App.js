//STATEについてPROPSとのちがい
// コンポーネントの内部だけで使用される。変更可能な点が違い
import React,　{ Component }　from 'react';

const App = () => (<Counter></Counter>)//ここでcounterのインスタンスが呼び出される

class Counter extends Component {
  //componentの初期化時にはconstructorが必要
  constructor(props){
    super(props)
    console.log(this.state)
    this.state = {count : 0}//countの値を設定（初期設定）
  }

  handlePlusButton = () =>{
    console.log("handlePlusButton")
    this.setState({ count: this.state.count + 1})//状態変更したいときにおきまりのやつ[setState]必須
    //setState呼ぶとrenderがコールバックとして呼び出される
  }
  handleMinusButton = () =>{
    this.setState({ count: this.state.count - 1})//これES６の課題でできそう
  }
  
  render() {
    return(
    <React.Fragment>
     <div>count: {this.state.count}</div>
      <button onClick = {this.handlePlusButton}>+1</button>
      <button onClick = {this.handleMinusButton}>-1</button>
    </React.Fragment>
  )
  }
}

export default App;

