import React from 'react';

let TimerForm = React.createClass({
    onSubmit: function(e){
        e.preventDefault();

        let strSeconds = this.refs.seconds.value;

        if(strSeconds.match(/^[0-9]+$/)){
            this.refs.seconds.value = '';
            this.props.onSetTimer(parseInt(strSeconds, 10));
        }
    },
    render: function(){
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
});

module.exports = TimerForm;