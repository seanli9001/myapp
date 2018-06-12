import 'antd/dist/antd.css'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Input, Icon} from 'antd';

class App extends Component {
  state = {
    text: ''
  }

  handleClick = () => {
    const {text} = this.state
    if (text === 'ouch') {
      this.setState({
        text: 'yeah'
      })  
    } else {
      this.setState({
        text: 'ouch'
      })
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">fuck off sdasdasdasd</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type={'primary'} onClick={this.handleClick}>hit me</Button>
        <h4>{this.state.text}</h4>
        <div className="content">
          <div className="header">
            <div className="headerleft">
              <span className="text">日期：</span><Input placeholder="选择日期" addonAfter={<Icon type="calendar" />} />
              <Button type={'primary'} /* onClick={this.handleClick }*/>查询</Button>
            </div>
            <div className="headerright">
             <Button type={'primary'} /* onClick={this.handleClick }*/>上报</Button>
            </div>
          </div>
        <div className="table">
        </div>
        </div>
      </div>
    );
  }
}

export default App;
