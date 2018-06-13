import 'antd/dist/antd.css'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Input, Icon} from 'antd';

const demoArray = [
  {Name: '高压蒸汽', UOM:'吨', TagName:'4FIQ5002', Value:'124', ValueConfirm: '', Description: '高压蒸汽投入'},
  {Name: '高压蒸汽2', UOM:'吨', TagName:'4FIQ5002', Value:'124', ValueConfirm: '', Description: '高压蒸汽投入'},
  {Name: '高压蒸汽', UOM:'吨', TagName:'4FIQ5002', Value:'124', ValueConfirm: '', Description: '高压蒸汽投入'},
  {Name: '高压蒸汽2', UOM:'吨', TagName:'4FIQ5002', Value:'124', ValueConfirm: '', Description: '高压蒸汽投入'},
  {Name: '高压蒸汽', UOM:'吨', TagName:'4FIQ5002', Value:'124', ValueConfirm: '', Description: '高压蒸汽投入'},
  {Name: '高压蒸汽2', UOM:'吨', TagName:'4FIQ5002', Value:'124', ValueConfirm: '', Description: '高压蒸汽投入'},
  {Name: '高压蒸汽', UOM:'吨', TagName:'4FIQ5002', Value:'124', ValueConfirm: '', Description: '高压蒸汽投入'},
  {Name: '高压蒸汽2', UOM:'吨', TagName:'4FIQ5002', Value:'124', ValueConfirm: '', Description: '高压蒸汽投入'},
  {Name: '高压蒸汽', UOM:'吨', TagName:'4FIQ5002', Value:'124', ValueConfirm: '', Description: '高压蒸汽投入'},
  {Name: '高压蒸汽2', UOM:'吨', TagName:'4FIQ5002', Value:'124', ValueConfirm: '', Description: '高压蒸汽投入'},
  {Name: '高压蒸汽2', UOM:'吨', TagName:'4FIQ5002', Value:'124', ValueConfirm: '', Description: '高压蒸汽投入'}
]

class App extends Component {
  state = {
    text: '',
    demoArray: demoArray
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
                  <th>项目</th>
                  <th>位号</th>
                  <th>单位</th>
                  <th>原始值</th>
                  <th>确认值</th>
                  <th>备注</th>
                </tr>
              </thead>
              <tbody>
                {this.state.demoArray.map((data, index)=> (
                  <tr key={index}>
                    <td>{data.Name}</td>
                    <td>{data.UOM}</td>
                    <td>{data.TagName}</td>
                    <td>{data.Value}</td>
                    <td>{data.ValueConfirm}</td>
                    <td>{data.Description}</td>
                  </tr>
                ))}
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
