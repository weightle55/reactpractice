/**
 * 이벤트 사용시 주의 사항
 * 1. 카멜 표기 법 사용 ( html => onclick , react => onClick)
 * 2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달합니다.
 * 3. DOM 요소에만 이벤트를 설정할 수 있다. (div,button, input, form, span)
 *  ex) MyComponent에 onClick 값을 설정하면 MyComponent를 클릭할 때 doSomething 함수를 실행하는 것이 아니라, 그냥 이름이 onClick인 props를 MyComponent에 전달
 */

import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: ""
  };

  /**
   * 임의 메서드 만들기
   * 가독성이 좋다.
   * 함수가 호출될 때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 HTML요소의 이벤트로 등록되는 과정에서
   * 메서드와 this관계가 끊어질 수 있다.
   * 이 때문에 임의 메서드가 이벤트로 등록 되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩해야 한다.
   */
  //  constructor(props){
  //      super(props);
  //      this.handleChange=this.handleChange.bind(this);
  //      this.handleClick=this.handleClick.bind(this);
  //  }

  //  handleChange(e){
  //      this.setState({
  //          message : e.target.value
  //      });
  //  }

  //  handleClick(){
  //      alert(this.state.message);
  //      this.setState({
  //          message : ''
  //      });
  //  }

  /**
   * 매번 constructor를 수정 하지 않고 메서드를 바인딩하는 법  : 바벨의 transform-class-properties
   */

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleClick = e => {
    this.setState({
      message: ""
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
