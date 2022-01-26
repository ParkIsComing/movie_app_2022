import React from "react";

class App extends React.Component{  /*클래스형 컴포넌트*/
  state={
    count:0,

  };

  add = () =>{
    this.setState(current =>({ count: current.count+1}));
  }

  minus= () => {
    this.setState(current => ({count: current.count-1}));
  }

  render(){ /* 함수형 컴포넌트는 return문으로  클래스형 컴포넌트 render()로 JSX 반환*/
    return (<div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>); /*현재 클래스에 선언한 state를 지칭하기 위해 this.state*/
  }
}
export default App;
