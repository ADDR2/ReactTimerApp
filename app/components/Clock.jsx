import React from 'react';
import PropTypes from 'prop-types';

let Clock = React.createClass({
    getDefaultProps: function(){
        return {
            totalSeconds: 0
        };
    },
    formatSeconds: function(totalSeconds){
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);

        seconds = (seconds < 10 ? '0' : '') + seconds;
        minutes = (minutes < 10 ? '0' : '') + minutes;

        return `${minutes}:${seconds}`;
    },
    render: function(){

        let { totalSeconds } = this.props;

        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }
});

Clock.propTypes = {
    totalSeconds: PropTypes.number
};

module.exports = Clock;