import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import Timer from 'Timer';

describe('Timer', () => {
    it('should exist', ()=> {
        expect(Timer).toExist();
    });

    describe('handleSettimer', () => {
        it('should set state to started and time', (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetTimer(10);

            expect(timer.state.count).toBe(10);
            expect(timer.state.timerStatus).toBe('started');

            setTimeout(() => {
                expect(timer.state.count).toBe(11);
                done();
            }, 1001);
        });

        it('should pause timer on paused status', (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetTimer(3);
            timer.handleStatusChange('paused');

            setTimeout(() => {
                expect(timer.state.count).toBe(3);
                expect(timer.state.timerStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should stop timer on stopped status', (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetTimer(3);
            timer.handleStatusChange('stopped');

            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});