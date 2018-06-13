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
        <div className="box">
          <div className="content">
            <div className="header">
              <div className="headerleft">
                <span className="text">日期：</span><Input placeholder="选择日期" type="text" addonAfter={<Icon type="calendar" />} />
                <Button type={'primary'} /* onClick={this.handleClick }*/>查询</Button>
              </div>
              <div className="headerright">
              <Button type={'primary'} /* onClick={this.handleClick }*/>上报</Button>
              </div>
            </div>
          <div className="tablecontent">
            <table>
              <thead>
                <tr>
                  <th><Input placeholder="确认值" type="checkbox"/></th>
                  <th>项目</th>
                  <th>位号</th>
                  <th>单位</th>
                  <th>原始值</th>
                  <th>确认值</th>
                  <th>备注</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Input placeholder="确认值" type="checkbox"/></td>
                  <td>高压蒸汽</td>
                  <td>4FIQ5002</td>
                  <td>吨</td>
                  <td></td>
                  <td><Input placeholder="确认值" type="number"/></td>
                  <td></td>
                </tr>
                <tr>
                  <td><Input placeholder="确认值" type="checkbox"/></td>
                  <td>中压蒸汽</td>
                  <td>4FIQ5007</td>
                  <td>吨</td>
                  <td></td>
                  <td><Input placeholder="确认值" type="number"/></td>
                  <td></td>
                </tr>
                <tr>
                  <td><Input placeholder="确认值" type="checkbox"/></td>
                  <td>低压蒸汽</td>
                  <td>4FIQ5006</td>
                  <td>千克</td>
                  <td></td>
                  <td><Input placeholder="确认值" type="number"/></td>
                  <td></td>
                </tr>
                <tr>
                  <td><Input placeholder="确认值" type="checkbox"/></td>
                  <td>天然气</td>
                  <td>4FIQ3301</td>
                  <td>标准立方</td>
                  <td></td>
                  <td><Input placeholder="确认值" type="number"/></td>
                  <td></td>
                </tr>
                <tr>
                  <td><Input placeholder="确认值" type="checkbox"/></td>
                  <td>循环水（循环）</td>
                  <td>4FIQ5003</td>
                  <td>立方</td>
                  <td></td>
                  <td><Input placeholder="确认值" type="number"/></td>
                  <td></td>
                </tr>
                <tr>
                  <td><Input placeholder="确认值" type="checkbox"/></td>
                  <td>低温水（循环）</td>
                  <td>4FIQ5004</td>
                  <td>立方</td>
                  <td></td>
                  <td><Input placeholder="确认值" type="number"/></td>
                  <td></td>
                </tr>
                <tr>
                  <td><Input placeholder="确认值" type="checkbox"/></td>
                  <td>冷冻水</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Input placeholder="确认值" type="number"/></td>
                  <td></td>
                </tr>
                <tr>
                  <td><Input placeholder="确认值" type="checkbox"/></td>
                  <td>仪表风</td>
                  <td>4FIQ5005</td>
                  <td>标准立方</td>
                  <td></td>
                  <td><Input placeholder="确认值" type="number"/></td>
                  <td></td>
                </tr>
                <tr>
                  <td><Input placeholder="确认值" type="checkbox"/></td>
                  <td>N2（总）</td>
                  <td>4FIQ5001</td>
                  <td>标准立方</td>
                  <td></td>
                  <td><Input placeholder="确认值" type="number"/></td>
                  <td></td>
                </tr>
                <tr>
                  <td><Input placeholder="确认值" type="checkbox"/></td>
                  <td>碱液</td>
                  <td>4FIQ4006</td>
                  <td>吨</td>
                  <td></td>
                  <td><Input placeholder="确认值" type="number"/></td>
                  <td></td>
                </tr>
                <tr>
                  <td><Input placeholder="确认值" type="checkbox"/></td>
                  <td>污水</td>
                  <td>手动输入</td>
                  <td>吨</td>
                  <td></td>
                  <td><Input placeholder="确认值" type="number"/></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
