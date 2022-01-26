import React from "react";

class App extends React.Component{  /*클래스형 컴포넌트*/
  constructor(props) {
    super(props);
    console.log('hello');
  }

  state={
    count:0,

  };

  add = () =>{
    this.setState(current =>({ count: current.count+1}));
  }

  minus= () => {
    this.setState(current => ({count: current.count-1}));
  }

  componentDidMount(){ /*render()가 실행된 이후 componentDidMount()가 실행됨*/
    console.log('component rendered')
  }

  componentDidUpdate(){
    console.log('I just updated')
  }

  render(){
    console.log("I'm rendering");
    return(
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )  }
}
export default App;
