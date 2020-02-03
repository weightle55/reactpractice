/**
 * State는 컴포넌트 내부에서 바뀔 수 있는 값을 의미합니다.
 * props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며,
 * 컴포넌트 자신은 읽기 전용으로만 사용할 수 있습니다.
 *
 * 리액트는 두 가지 종류의 State가 있다.
 * 1. 클래스형 컴포넌트가 지니고 있는 State
 * 2. 함수형 컴포넌트에서 useState라는 함수를 통해 사용하는 state
 */

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState(prevState =>{
                return {
                    number:prevState.number +1
                };
            });

            this.setState(prevState=>({
                number:prevState.number+1
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
