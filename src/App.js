import React from "react";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from "./routes/About";
import Home from './routes/Home';
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App(){
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/> {/*path가 슬래쉬인 이유는 localhost:3000에 접속하면 기본으로 보여줄 컴포넌트가 Home이라서*/}
      <Route path="/about" component={About}/> 
      <Route path= "/movie-detail" component={Detail}/>
    </HashRouter>
  );
}
export default App;
