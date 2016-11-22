import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNum: 0,
      addNum: 0,
      operator:'',
      isOperatorPressed: false,
    };

    this.pressDigit = this.pressDigit.bind(this);
    this.pressOperator = this.pressOperator.bind(this);
    this.Calculate = this.Calculate.bind(this);
  }

  resetState() {
    // TODO
    this.setState({
		displayNum:  0,
      	addNum:  0,
      	operator: '',
      	isOperatorPressed: false,
    });
  };

  pressDigit(num) {
  	if(this.state.operator === '='){
  		this.setState({
  			displayNum: parseInt(num),
  			addNum: 0,
  			operator:'',
  			isOperatorPressed: false,
  		});
  	}
  	else if(this.state.operator ===''){
  		this.setState({
  			displayNum: this.state.displayNum*10+parseInt(num),
  			isOperatorPressed: false,
  		});
  	}
  	else if(this.state.isOperatorPressed === false){
  		this.setState({
  			displayNum: this.state.displayNum*10+parseInt(num),
  			isOperatorPressed: false,
  		});
  	}
  	else if(this.state.operator!==''){
  		this.setState({
  			addNum: this.state.displayNum, displayNum:parseInt(num),
  			isOperatorPressed: false,
  		});
  	}
  }

  pressOperator(opt) {
  	if(this.state.isOperatorPressed){
  		this.setState({
  			operator: opt,
  			isOperatorPressed: true,
  		});
  	}
  	else if(this.state.isOperatorPressed===false){
  		if(this.state.operator !=='' && this.state.operator!=='='){
  			this.Calculate(opt);
  			this.setState({
				isOperatorPressed: true,
  			});
  		}
  		else{
  			this.setState({
  				isOperatorPressed: true,
  				operator: opt,
  				addNum: this.state.displayNum,
  			});
  		}
  	}
  }

  Calculate(opt){
  	if(this.state.operator ==='+'){
  		this.setState({
  			displayNum: this.state.displayNum+this.state.addNum,
  			addNum: this.state.displayNum,
  			operator: opt,
  		});
  	}
  	else if(this.state.operator ==='-') {
  		this.setState({
  			displayNum: this.state.addNum-this.state.displayNum,
  			addNum: this.state.displayNum,
  			operator: opt,
  		});
  	}
  	else if(this.state.operator === 'x') {
  		this.setState({
  			displayNum: this.state.addNum * this.state.displayNum,
  			addNum: this.state.displayNum,
  			operator: opt,
  		});
  	}
  	else if(this.state.operator === '÷') {
  		this.setState({
  			displayNum: this.state.addNum / this.state.displayNum,
  			addNum: this.state.displayNum,
  			operator: opt,
  		});
  	}
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.displayNum.toString()}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressOperator}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.pressDigit}>7</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressDigit}>8</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressDigit}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressOperator}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.pressDigit}>4</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressDigit}>5</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressDigit}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressOperator}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.pressDigit}>1</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressDigit}>2</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressDigit}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressOperator}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={this.pressDigit} style="width:120px">0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.Calculate}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;