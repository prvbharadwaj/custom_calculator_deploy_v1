import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { faHome, faCaretDown, faCaretUp, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CurrencySection.css';

class CurrencySection extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            selected_currency1 : 'USD',
            currency1_value : '',
            dropdown_status1 : false,
            selected_currency2: 'USD',
            dropdown_status2 : false
        };
    }

    handleDropdown = (key) =>{
        switch(key)
        {
            case 1:
                this.setState({
                    dropdown_status1 : !this.state.dropdown_status1,
                    dropdown_status2 : false
                })
                break;
            case 2:
                this.setState({
                    dropdown_status2 : !this.state.dropdown_status2,
                    dropdown_status1 : false
                })
                break;
            default:
                break;
        }
    }

    handleCurrencySelection = (data, key) =>{
        switch(key)
        {
            case 1:
                this.setState({
                    selected_currency1 : data,
                    dropdown_status1 : false
                });
                break;
            case 2:
                this.setState({
                    selected_currency2 : data,
                    dropdown_status2 : false
                });
                break;
            default:
                break;
        }
    }

    conversionPreCheck = () =>{
        (this.state.currency1_value === '')?
        (this.props.handleConversion(this.state.selected_currency1, this.state.selected_currency2, 0)):
        (this.props.handleConversion(this.state.selected_currency1, this.state.selected_currency2, this.state.currency1_value));
    }

    handleValueInput = event =>{
        this.setState({
            currency1_value : event.target.value
        });
    }


    render() {
        return (
            // start of first currency selection section
            <div className='currency-section-parent'>
                <div className='first-currency-section'>
                    <div className='dropdown-button' onClick={e => this.handleDropdown(1)}>
                        <p>{this.state.selected_currency1}</p>
                        <p className='dropdown-arrowmark'>
                            {(this.state.dropdown_status1)?
                            <FontAwesomeIcon icon={faAngleDown}/>:
                            <FontAwesomeIcon icon={faAngleUp}/>}
                        </p>
                    </div>
                    <div className='dropdown-container'>
                        <div className='currency-list-dropdown' style={{display : (this.state.dropdown_status1)?'block':'none'}}> 
                            {
                                this.props.currencies_list.map((item) =>{
                                    return(
                                        <p 
                                        className='dropdown-content'  
                                        onClick = {e => this.handleCurrencySelection(item, 1)}                                  
                                        >{item}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='first-currency-entry' style={{borderBottom : '1px solid #cd7700'}}>
                        <input type='text' autoFocus onChange={this.handleValueInput}></input>
                    </div>                    
                </div>



                {/* start of second currency selection section */}
                <div className='first-currency-section'> 
                    <div className='dropdown-button' onClick={e => this.handleDropdown(2)}>
                        <p>{this.state.selected_currency2}</p>
                        <p className='dropdown-arrowmark'>
                            {(this.state.dropdown_status2)?
                            <FontAwesomeIcon icon={faAngleDown}/>:
                            <FontAwesomeIcon icon={faAngleUp}/>
                            }
                        </p>
                    </div>
                    <div className='dropdown-container'>
                        <div className='currency-list-dropdown' style={{display : (this.state.dropdown_status2)?'block':'none'}}>
                            {
                                this.props.currencies_list.map((item, idx) =>{
                                    return(
                                        <p key={idx}
                                        className='dropdown-content'
                                        onClick={e => this.handleCurrencySelection(item, 2)}                                        
                                            >{item}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='first-currency-entry' style={{borderBottom : '1px solid #cd7700'}}>
                        {this.props.conversion_result}
                    </div>
                </div>
                <div className='convert-button' onClick={e => this.conversionPreCheck()}>Convert</div>
            </div>
        );
    }
}

CurrencySection.propTypes = {};

export default CurrencySection;