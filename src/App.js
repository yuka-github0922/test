import React, { Profiler } from 'react';

const App = () =>{
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "きれいなobasan"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index)=>{
          return (
            <User 
            name = {profile.name}
            age = {profile.age}
            key = {index}//consoleでのwarningに対する処置
            />
          )
        })
      }
    </div>
  )
}
const User = (props) => {
  return <div>Hi!myName is {props.name}私は{props.age}歳です</div>
}
User.defaultProps = {//defaultを入れることで、もし年齢がない場合もここに設定した値を入れることができる
  age: 1
}

export default App;

