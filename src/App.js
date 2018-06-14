import 'antd/dist/antd.css'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input, DatePicker } from 'antd';
import Game from './Game/Game';

const demoArray = [
  { Name: '高压蒸汽', UOM: '吨', TagName: '4FIQ5002', Value: 124, ValueConfirm: 124, Description: '高压蒸汽投入' },
  { Name: '高压蒸汽2', UOM: '吨', TagName: '4FIQ5003', Value: 124, ValueConfirm: 124, Description: '高压蒸汽投入' },
  { Name: '高压蒸汽', UOM: '吨', TagName: '4FIQ5004', Value: 124, ValueConfirm: 124, Description: '高压蒸汽投入' },
  { Name: '高压蒸汽2', UOM: '吨', TagName: '4FIQ5005', Value: 124, ValueConfirm: 124, Description: '高压蒸汽投入' },
  { Name: '高压蒸汽', UOM: '吨', TagName: '4FIQ5006', Value: 124, ValueConfirm: 124, Description: '高压蒸汽投入' },
  { Name: '高压蒸汽2', UOM: '吨', TagName: '4FIQ5007', Value: 124, ValueConfirm: 124, Description: '高压蒸汽投入' },
  { Name: '高压蒸汽', UOM: '吨', TagName: '4FIQ5008', Value: 124, ValueConfirm: 124, Description: '高压蒸汽投入' },
  { Name: '高压蒸汽2', UOM: '吨', TagName: '4FIQ5009', Value: 124, ValueConfirm: 124, Description: '高压蒸汽投入' },
  { Name: '高压蒸汽', UOM: '吨', TagName: '4FIQ5010', Value: 124, ValueConfirm: 124, Description: '高压蒸汽投入' },
  { Name: '高压蒸汽2', UOM: '吨', TagName: '4FIQ5011', Value: 124, ValueConfirm: 124, Description: '高压蒸汽投入' },
  { Name: '高压蒸汽2', UOM: '吨', TagName: '4FIQ5012', Value: 124, ValueConfirm: 124, Description: '高压蒸汽投入' }
]


class App extends Component {
  state = {
    text: '',
    demoArrayData: demoArray
  }

  handleClick = () => {
    const { text } = this.state
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

  dateChange = (date, dateString) => {
    console.log(date, dateString);
  }

  handleChange = (event, index) => {
    let finalValue = event.target.value

    let demoArrayData = this.state.demoArrayData.slice()

    demoArrayData[index].ValueConfirm = finalValue

    this.setState({
      demoArrayData: demoArrayData
    })

  }
  
 //elements.map(item => {return item.ValueConfirm}) 与 
 //elements.map(function(item){return item.ValueConfirm})一样
  handleSubmit = () => {
    let data = this.state.demoArrayData.map(item => {
      return item.ValueConfirm * 1
    })

    //修改确认值后，确认值以数组的形式显示、或者回传。
    console.log(data)
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
                <span className="text">日期：</span><DatePicker onChange={this.dateChange} placeholder="选择日期" />
                <Button type={'primary'} /* onClick={this.handleClick }*/>查询</Button>
              </div>
              <div className="headerright">
                <Button type={'primary'} onClick={this.handleSubmit }>上报</Button>
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
                  {this.state.demoArrayData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.Name}</td>
                      <td>{data.UOM}</td>
                      <td>{data.TagName}</td>
                      <td>{data.Value}</td>
                      <td><Input type="text" value={data.ValueConfirm} onChange={(ev) => this.handleChange(ev, index)} /></td>
                      <td>{data.Description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Game />
      </div>
    );
  }
}

export default App;
