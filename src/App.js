import React, { Component } from 'react';
import Calc from './Calc';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      result : ''
    }
    this.expression = '';
  }
  displayBox(event){
    const key = event.target.value;
      console.log(key);
      if(key === '='){
        this.expression = eval(this.state.result);
      }
      else if(key === 'AC') {
        this.expression = ''
      }
      else{
        this.expression += key;
      }
      this.setState({
        result: this.expression
      });
  }

  render() {
    return (
      <React.StrictMode>
        <table border = "1">
        <thead>
         <tr>
            <td colSpan="3"><input type="text" value={this.state.result} readOnly/></td>
            <td><Calc data = {{label:"AC", displayBox: this.displayBox.bind(this)}} /></td>
         </tr>
         </thead>
         <tbody>
         <tr>  
            <td><Calc data = {{label:"1", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"2", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"3", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"+", displayBox: this.displayBox.bind(this)}} /></td>
         </tr>
         <tr>
            <td><Calc data = {{label:"4", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"5", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"6", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"-", displayBox: this.displayBox.bind(this)}} /></td>
         </tr>
         <tr>
            <td><Calc data = {{label:"7", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"8", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"9", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"*", displayBox: this.displayBox.bind(this)}} /></td>
         </tr>
         <tr>
            <td><Calc data = {{label:".", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"0", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"=", displayBox: this.displayBox.bind(this)}} /></td>
            <td><Calc data = {{label:"/", displayBox: this.displayBox.bind(this)}} /></td>
         </tr>
         </tbody>
        </table>
      </React.StrictMode>
    )
  }
}

export default App;
