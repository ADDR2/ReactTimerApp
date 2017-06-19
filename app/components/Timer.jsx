import React from 'react';
import TimerForm from 'TimerForm';
import Clock from 'Clock';
import Controls from 'Controls';

let Timer = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch(this.state.timerStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  startTimer: function(){
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },
  handleSetTimer: function(seconds){
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus){
    this.setState({
      timerStatus: newStatus
    });
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
    //this.setState({ count: 0 });
  },
  render: function(){

    let { count, timerStatus } = this.state;
    let renderControlArea = () => {
      if(timerStatus !== 'stopped'){
        return (<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>);
      } else {
        return (<TimerForm onSetTimer={this.handleSetTimer}/>);
      }
    };

    return (
        <div>
            <h1 className="page-title">Timer App</h1>
            <Clock totalSeconds={count}/>
            {renderControlArea()}
        </div>
    );
  }
});

module.exports = Timer;