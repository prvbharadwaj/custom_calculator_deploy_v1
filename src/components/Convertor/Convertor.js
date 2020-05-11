import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Convertor.css';

class Convertor extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div className='convertor-parent'>
                <div className='switch-icon'>
                    <p onClick={e => this.props.handleSwitchScreen()} style={{color : (this.props.switchStatus), userSelect : 'none'}}>{'\u21CC'}</p>
                </div>
                <hr style={{width : '90%', border : '1.5px solid #cd7700', borderRadius : '5px', boxShadow : '0px 0px 2px #a6a6a6'}} />
                <p className='convertor title'>Currency Convertor</p>
            </div>
        );
    }
}

Convertor.propTypes = {};

export default Convertor;