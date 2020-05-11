import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './OutputScreen.css';

class OutputScreen extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {          
            display_data : '0',
            font_size : 20
        };
    }

    componentDidUpdate(){
        if(this.props.result === 0)
        {
            if(
                this.props.op_flag === false && 
                this.state.display_data !== Number(this.props.num1).toLocaleString("en-US", {minimumFractionDigits : 0, maximumFractionDigits : 12}))
                    this.setState({display_data : Number(this.props.num1).toLocaleString("en-US", {minimumFractionDigits : 0, maximumFractionDigits : 12})})

            else if(
                this.props.op_flag === true && 
                this.state.display_data !== Number(this.props.num2).toLocaleString("en-US", {minimumFractionDigits : 0, maximumFractionDigits : 12}))
                    this.setState({display_data : Number(this.props.num2).toLocaleString("en-US", {minimumFractionDigits : 0, maximumFractionDigits : 12})})

        }
        else if(
            this.props.result !== 0 && 
            this.state.display_data !== Number(this.props.result).toLocaleString("en-US", {minimumFractionDigits : 0, maximumFractionDigits : 12}))            
                {
                        // console.log("from display data = result",this.props.num2, this.props.op_flag)
                        this.setState({display_data : Number(this.props.result).toLocaleString("en-US", {minimumFractionDigits : 0, maximumFractionDigits : 12})})
                }                
    }

   

    render() {
        return (
            <div className='screen-master'>
                <div className='dash-parent'>
                    <div className='switch-icon' onClick={e => this.props.handleSwitchScreen()} style={{color : (this.props.switchStatus), userSelect : 'none'}}>{'\u21CC'}</div>
                    <div className='operator-dash'>
                        <p className={(this.props.op["op"] === 'div')?'active':'inactive'}>{'\u00F7'}</p>
                        <p className={(this.props.op["op"] === 'mul')?'active':'inactive'}id='test'>x</p>
                        <p className={(this.props.op["op"] === 'add')?'active':'inactive'}>+</p>
                        <p className={(this.props.op["op"] === 'sub')?'active':'inactive'}>-</p>
                    </div>
                </div>
                <div className='display-section'>
                    {this.state.display_data}
                </div>
            </div>
        );
    }
}

OutputScreen.propTypes = {};

export default OutputScreen