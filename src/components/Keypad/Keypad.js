import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Keypad.css';


class Keypad extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {}; 
    }



  


    render() {
        return (
            <div className='keypad-master'>                   
                <div className='keypad-container'>
                    <div className='actual-keypad'>
                        <div className='func-rows'>
                            <p onClick={e => this.props.handleClearInput(1)}>AC</p>
                            <p onClick={e => this.props.handleClearInput(2)}>C</p>
                            <p onClick={e => this.props.handleOperatorClear()}>OC</p>
                            <p className='four-or' style={{fontSize:'19px'}} onClick={e => this.props.handleOperatorInput(1)}>{'\u00F7'}</p>
                        </div>
                        <div className='num-rows'>
                            <p onClick={e => this.props.handleNumberInput(7)}>7</p>
                            <p onClick={e => this.props.handleNumberInput(8)}>8</p>
                            <p onClick={e => this.props.handleNumberInput(9)}>9</p>
                            <p className='four-or' style={{fontSize:'19px'}} onClick={e => this.props.handleOperatorInput(2)}>x</p>
                        </div>
                        <div className='num-rows'>
                            <p onClick={e => this.props.handleNumberInput(4)}>4</p>
                            <p onClick={e => this.props.handleNumberInput(5)}>5</p>
                            <p onClick={e => this.props.handleNumberInput(6)}>6</p>
                            <p className='four-or' style={{fontSize:'19px'}} onClick={e => this.props.handleOperatorInput(3)}>+</p>
                        </div>
                        <div className='num-rows'>
                            <p onClick={e => this.props.handleNumberInput(1)}>1</p>
                            <p onClick={e => this.props.handleNumberInput(2)}>2</p>
                            <p onClick={e => this.props.handleNumberInput(3)}>3</p>
                            <p className='four-or' style={{fontSize:'19px'}} onClick={e => this.props.handleOperatorInput(4)}>-</p>
                        </div>
                        <div className='num-rows'>
                            <p id='double-size' onClick={e => this.props.handleNumberInput(0)}>0</p>
                            <p onClick={e => this.props.handleDecimalInput()}>.</p>
                            <p 
                                className='four-or' 
                                style={{fontSize:'19px'}} 
                                onClick={e => this.props.handleEqualSign()}                            
                            >=</p>
                        </div>
                    </div>       
                </div>
            </div>
        );
    }
}

Keypad.propTypes = {};

export default Keypad;