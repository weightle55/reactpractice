/**
 * input 여러개 처리
 * event 객체 활용 => e.target.name 값을 사용하면 된다.
 * onChange 이벤트 핸들러에서 e.target.name은 해당 인풋의 name을 가리킨다.
 *
 *
 */
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  };

  handleChange = (e) => {
    this.setState({
        //key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됨
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  };

  handleKeyPress = e =>{
      if(e.key=== 'Enter'){
          this.handleClick();
      }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={this.state.username}
        onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
