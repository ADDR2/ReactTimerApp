import React from 'react';
import PropTypes from 'prop-types';

let Controls = React.createClass({
    onStatusChange: function(newStatus){
        return () => {
            this.props.onStatusChange(newStatus);
        };
    },
    componentWillReceiveProps: function(newProps){

    },
    render: function () {

        let { countdownStatus } = this.props;
        let renderStartStopButton = () => {
            if (countdownStatus === 'started'){
                return (<button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>);
            } else if (countdownStatus === 'paused'){
                return (<button className="button primary" onClick={this.onStatusChange('started')}>Start</button>);
            }
        };

        return (
        <div className="controls">
            {renderStartStopButton()}
            <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
        </div>
        );
    }
});

Controls.propTypes = {
    countdownStatus: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired
};

module.exports = Controls;