import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Keypad.css';


class Keypad extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {}; 
    }


    handleKeyPress = (e) =>{
        switch(e.keyCode){
            case 67:
                this.props.handleClearInput(1)
                break;
            case 8:
                this.props.handleClearInput(2)
                break;
            case 79:
                this.props.handleOperatorClear()
                break;
            case 111 || 220:
                this.props.handleOperatorInput(1)
                break;
            case 55 || 103:
                this.props.handleNumberInput(7)
                break;
            case 56 || 104:
                this.props.handleNumberInput(8)
                break;
            case 57 || 105:
                this.props.handleNumberInput(9)
                break;
            case 106 || (16 && 56):
                this.props.handleOperatorInput(2)
                break;
            case 52 || 100:
                this.props.handleNumberInput(4)
                break;
            case 53 || 101:
                this.props.handleNumberInput(5)
                break;
            case 54 || 102:
                this.props.handleNumberInput(6)
                break;
            case 107 || (16 && 187):
                this.props.handleOperatorInput(3)
                break;
            case 49 || 97:
                this.props.handleNumberInput(1)
                break;
            case 50 || 98:
                this.props.handleNumberInput(2)
                break;
            case 51 || 99:
                this.props.handleNumberInput(3)
                break;
            case 109 || 189:
                this.props.handleOperatorInput(4)
                break;
            case 48 || 96:
                this.props.handleNumberInput(0)
                break;
            case 190:
                this.props.handleDecimalInput()
                break;
            case 187:
                this.props.handleEqualSign()
                break;
            default:
                break;
        }
    }

    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress);
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