import React,{Component} from "react";
import "./App.css";

//클래스형 컴포넌트
//Component include

class App extends Component{
  render(){
    const name='react';
    return <div className="react">{name}</div>
  }
}

export default App;
