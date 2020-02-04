import React,{Component} from 'react';

class LifeCycleSample extends Component{
    state = {
        number : 0,
        color : null
    }

    myRef = null;

    constructor(props){
        super(props);
        console.log('constructor');
    }

    //props로 받아 온 값을 state에 동기화, 마운트와 업데이트에 호출됨
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return {color : nextProps.color};
        }
        return null;
    }

    //Component를 만들고, 첫 렌더링을 마친 후 실행, 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 가능
    componentDidMount(){
        console.log('componentDidMount');
    }

    //props나 state가 변경 됬을 때 , 리렌더링 여부 지정, true, false 리턴
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate');

        return nextState.number % 10 !==4;
    }

    //컴포넌트를 DOM에서 제거할 때 실행, componentDidmount에서 등록한 함수나, DOM이 있다면 여기서 제거
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleCilck = () =>{
        this.setState({
            number : this.state.number+1
        });
    }

    //render 이후 브라우저에 반영되기 전 호출
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate',prevProps,prevState);
        if(snapshot){
            console.log('업데이트되기 직전 색상:',snapshot);
        }
    }

    render(){
        console.log('render');

        const style = {
            color : this.props.color
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref=>this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleCilck}>더하기</button>
            </div>
        );
    }


}

export default LifeCycleSample;