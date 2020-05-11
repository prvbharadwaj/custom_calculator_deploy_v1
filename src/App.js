import React, {Component} from 'react';
import Keypad from './components/Keypad/Keypad';
import OutputScreen from './components/OutputScreen/OutputScreen';
import Convertor from './components/Convertor/Convertor';
import './App.css';

class App extends Component{
  constructor(props, ...rest){
    super(props, ...rest);
    this.state = {
        keyboard_input : 0,
        keyboard_input2 : 0,
        result : 0,
        operator_flag : false,
        operation_object : {},
        decimal_flag1 : false,
        decimal_flag2 : false,
        switch_screen : true,
    };
  }


  handleNumberInput = (num) =>{
        if(!this.state.operator_flag) //holds 1st number
        {
            if(this.state.keyboard_input.toString().length <= 12) //restricts length to fit display
            {
                if(this.state.decimal_flag1)
                {
                    if(Number.isInteger(this.state.keyboard_input))
                    {
                        this.setState({
                            keyboard_input : this.state.keyboard_input + num/10
                        })
                    }
                    else
                    {
                        let temp = parseInt(this.state.keyboard_input.toString().split(".")[1])
                        let temp2 = temp*10 + num
                        let len = temp2.toString().length
                        this.setState({
                            keyboard_input : parseInt(this.state.keyboard_input) + temp2/(Math.pow(10,len))
                        })
                    }
                }
                else if(!this.state.decimal_flag1)
                {
                    this.setState({
                        keyboard_input : this.state.keyboard_input*10 + num
                    });
                }
            }
        }
        else //holds 2nd number
        {
            if(this.state.keyboard_input2.toString().length <= 12) //restricts length to fit display
            {
                if(this.state.decimal_flag2)
                {
                    if(Number.isInteger(this.state.keyboard_input2))
                    {
                        this.setState({
                            keyboard_input2 : this.state.keyboard_input2 + num/10
                        })
                    }
                    else
                    {
                        let temp = parseInt(this.state.keyboard_input2.toString().split(".")[1])
                        let temp2 = temp*10 + num
                        let len = temp2.toString().length
                        this.setState({
                            keyboard_input2 : parseInt(this.state.keyboard_input2) + temp2/(Math.pow(10,len))
                        })
                    }
                }
                else if(!this.state.decimal_flag2)
                {
                    this.setState({
                        keyboard_input2 : this.state.keyboard_input2*10 + num
                    });
                }
            }   
        }
    }



     handleDecimalInput = () =>{
        if(!this.state.operator_flag)
        {
            this.setState({decimal_flag1 : true})
        }
        else
            this.setState({decimal_flag2 : true})
    }




    handleClearInput = (code) =>{
        if(!this.state.operator_flag) //clear for 1st number
        {
            if(code === 1)
                this.setState({
                  keyboard_input : 0, 
                  decimal_flag1 : false, 
                  keyboard_input2 : 0, 
                  decimal_flag2 : false, 
                  result : 0, 
                  operation_object : {}, 
                  operator_flag : false})
            else if(code === 2)
            {
                if(this.state.decimal_flag1 && !Number.isInteger(this.state.keyboard_input))
                {
                    let temp = parseInt(this.state.keyboard_input.toString().split(".")[1])
                    let len = parseInt(temp/10).toString().length
                    let new_dec_part = (parseInt(temp/10))/(Math.pow(10, len))
                    if(new_dec_part === 0)
                    {
                        this.setState({decimal_flag1 : false})
                    }                    
                    this.setState({keyboard_input : parseInt(this.state.keyboard_input) + new_dec_part})           
                }
                else if (this.state.decimal_flag1 && Number.isInteger(this.state.keyboard_input))
                {
                    this.setState({decimal_flag1 : false})
                }
                else if(!this.state.decimal_flag1)
                {
                    this.setState({keyboard_input : Math.floor(this.state.keyboard_input/10)})
                }
            }
        }
        else //clear for 2nd number
        {
             if(code === 1)
                this.setState({
                  keyboard_input : 0, 
                  decimal_flag1 : false, 
                  keyboard_input2 : 0, 
                  decimal_flag2 : false, 
                  result : 0, 
                  operation_object : {}, 
                  operator_flag : false})
            else if(code === 2)
            {
                if(this.state.decimal_flag2 && !Number.isInteger(this.state.keyboard_input2))
                {
                    let temp = parseInt(this.state.keyboard_input2.toString().split(".")[1])
                    let len = parseInt(temp/10).toString().length
                    let new_dec_part = (parseInt(temp/10))/(Math.pow(10, len))
                    if(new_dec_part === 0)
                    {
                        this.setState({decimal_flag2 : false})
                    }                    
                    this.setState({keyboard_input2 : parseInt(this.state.keyboard_input2) + new_dec_part})           
                }
                else if (this.state.decimal_flag2 && Number.isInteger(this.state.keyboard_input2))
                {
                    this.setState({decimal_flag2 : false})
                }
                else if(!this.state.decimal_flag2)
                {
                    this.setState({keyboard_input2 : Math.floor(this.state.keyboard_input2/10)})
                }                
            }
        }
    }



    handleOperatorInput = (code) =>{
        // reject operator input if operator flag is true (indicates that there is already an existing operation)
        let a = {}
        switch(code){
            case 1: 
                Object.assign(a, {op : 'div'})
                this.setState({
                    operator_flag : true,
                    operation_object : a
                })
                break;

            case 2:
                Object.assign(a, {op : 'mul'})
                this.setState({
                    operator_flag : true,
                    operation_object : a
                })
                break;
            
            case 3:
                Object.assign(a, {op : 'add'})
                this.setState({
                    operator_flag : true,
                    operation_object : a
                })
                break;
            
            case 4:
                Object.assign(a, {op : 'sub'})
                this.setState({
                    operator_flag : true,
                    operation_object : a
                })
                break;

            default:
                this.setState({
                    operator_flag : false,
                    operation_object : {}
                })
                break;
        }
    }

    handleOperatorClear =() =>{
      this.setState({operator_flag : false, operation_object : {}})
    }

    handleEqualSign =() =>{
      let action = this.state.operation_object
      switch(action['op']){
        case 'div':
            if(this.state.keyboard_input2 === 0)
              this.setState({result : 'ERR'})
            else
              this.setState({
                  result : (this.state.keyboard_input)/(this.state.keyboard_input2)},
                  () => this.updateResults()
                  );
          break;
        
        case 'mul':
            this.setState({
                result : (this.state.keyboard_input)*(this.state.keyboard_input2)},
                () => this.updateResults()
                );
          break;

        case 'add':
            this.setState({
                result : (this.state.keyboard_input) + (this.state.keyboard_input2)},
                () => this.updateResults()
                )
          break;

        case 'sub':
            this.setState({
                result : (this.state.keyboard_input)-(this.state.keyboard_input2)},
                () => this.updateResults()
                )
          break;

        default:
            this.setState({
                result : 0},
                () => this.updateResults()
                )
          break;
      }
    }

    updateResults = () =>{
          this.setState({
          keyboard_input : this.state.result, 
          keyboard_input2 : 0, 
          operation_object : {}, 
          operator_flag : false,
          decimal_flag1 : false,
          decimal_flag2 : false
        })
    }

    handleSwitchScreen = () =>{
        let temp = this.state.switch_screen
        this.setState({switch_screen : !temp})
    }


  render(){
     return (
         <div className='calc-master'>
            <div className="App">
                {
                    (this.state.switch_screen)?
                    (
                        <React.Fragment>
                            <OutputScreen
                                num1 = {this.state.keyboard_input}
                                num2 = {this.state.keyboard_input2}
                                op = {this.state.operation_object}
                                op_flag = {this.state.operator_flag}
                                result = {this.state.result}
                                handleSwitchScreen = {this.handleSwitchScreen}
                                switchStatus = '#cd7700'
                                // decimal_flag1 = {this.state.decimal_flag1}
                                // decimal_flag2 = {this.state.decimal_flag2}
                                // result_decimal_flag = {!(Number.isInteger(this.state.result))}
                            />

                            <Keypad
                                handleNumberInput = {this.handleNumberInput}
                                handleClearInput = {this.handleClearInput}
                                handleDecimalInput = {this.handleDecimalInput}
                                handleOperatorInput = {this.handleOperatorInput}
                                handleOperatorClear = {this.handleOperatorClear}
                                handleEqualSign = {this.handleEqualSign}
                            />
                        </React.Fragment>
                    ):
                    (
                        <Convertor
                            handleSwitchScreen = {this.handleSwitchScreen}
                            switchStatus = 'white'
                        />
                    )
                }
                
            </div>
        </div>
      );
  }

}

App.propTypes = {};
export default App;
