import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import './Convertor.css';
import CurrencySection from './CurrencySection/CurrencySection';

class Convertor extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            currencies_list : [],
            response : {},
            conversion_result : '0'
        };
    }

    componentDidMount(){

        // ,{
        //     headers : {
        //         'Content-type' : 'application/json',
        //         'Access-Control-Allow-Origin' : '*',
        //         "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
        //         "Access-Control-Allow-Credentials" : "true",
        //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        //     }
        // }

        // axios.get(`/latest`)
        // .then(resp => console.log(resp));
        // .then(data => console.log(data));

        fetch(`http://data.fixer.io/api/latest?access_key=f7994f6b47018bbb82a5ec0a2cb93f32`)
        .then(response => response.json())
        .then(data => this.setState({
            response : data,
            currencies_list : (data['rates'] === undefined || data['rates'] === null)?[]:Object.keys(data['rates'])
        }));
    }

    handleConversion = (cur1, cur2, amount) =>{
        let base_cur_rate = this.state.response['rates'][cur1];
        let temp_basecur_val = amount/base_cur_rate;
        let temp_result = temp_basecur_val * this.state.response['rates'][cur2];
        this.setState({conversion_result : temp_result.toFixed(3)})
    }

    render() {
        return (
            <div className='convertor-parent'>
                <div className='switch-icon'>
                    <p onClick={e => this.props.handleSwitchScreen()} style={{color : (this.props.switchStatus), userSelect : 'none'}}>{'\u21CC'}</p>
                </div>
                <hr style={{width : '90%', border : '1.5px solid #cd7700', borderRadius : '5px', boxShadow : '0px 0px 2px #a6a6a6'}} />
                <p className='convertor title' style={{color : 'white'}}>Currency Convertor</p>
                <CurrencySection
                    currencies_list = {this.state.currencies_list}
                    handleConversion = {this.handleConversion}
                    conversion_result = {this.state.conversion_result}
                />
            </div>
        );
    }
}

Convertor.propTypes = {};

export default Convertor;