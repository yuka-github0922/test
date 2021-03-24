//prop typesについて→プロパティについての型チェックについて（TSみたいな、もん）
import propTypes　from 'prop-types';

const App = () =>{
  const profiles = [
    {name: "hana", age: 10},
    {name: "Hanako", age: 5},
    {name: "きれいなobasan", age: 40},
  ]
  return (
    <div>
      {
        profiles.map((profile, index)=>{
          return (
            <User 
            name = {profile.name}
            age = {profile.age}
            key = {index}
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
User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired//isRequiredでageは絶対に入力されていないといけないデータになる
}

export default App;

