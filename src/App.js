import 'antd/dist/antd.css'
import React, { Component } from 'react';
import './App.css';
import { Button, Input, DatePicker, Table } from 'antd';

const data = [
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
    data: data,
    dateStr: '',
  }

  dateChange = (date, dateString) => {
    this.setState({
      dateStr: (date, dateString)
    })
  }

  handleDate = () => {
    if (this.state.dateStr) {
      console.log(this.state.dateStr);
    } else {
      alert('请选择查询日期')
    }
  }
  handleConfirmValueChange = (ev, record) => {
    let finalValue = ev.target.value
    let data = this.state.data.slice()
    var idx = data.findIndex(item => item.TagName === record.TagName)
    data[idx].ValueConfirm = finalValue
    this.setState({
      data: data
    })
  }
  handleSubmit = () => {
    let submitConfirmValue = this.state.data.map(item => {
      return item.ValueConfirm * 1
    })
    console.log(submitConfirmValue);
  }
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
    this.columns = [
      { title: '项目', width: '100', dataIndex: 'Name', key: 'projectName', fixed: 'left',  },
      { title: '位号', dataIndex: 'TagName', key: 'tagName'},
      { title: '单位', dataIndex: 'UOM', key: 'UOM' },
      { title: '原始值', dataIndex: 'Value', key: 'originalValue' },
      {
        title: '确认值', dataIndex: 'ValueConfirm', key: 'confirmValue', render: (text, record) => {
          return <Input style={{width: 160}} value={text} onChange={(ev) => { this.handleConfirmValueChange(ev, record) }} />
        }
      },
      { title: '备注', dataIndex: 'Description', key: 'noteText' }
    ];
  }
  render() {
    return (
      <div className="App">
        <div className="box">
          <div className="content">
            <div className="header">
              <div className="headerleft">
                <span className="text">日期：</span><DatePicker onChange={this.dateChange} placeholder="选择日期" />
                <Button type={'primary'} onClick={this.handleDate}>查询</Button>
              </div>
              <div className="headerright">
                <Button type={'primary'} onClick={this.handleSubmit}>上报</Button>
              </div>
            </div>
            <div className="table">
              <Table columns={this.columns} dataSource={this.state.data} pagination={{ pageSize: 12 }} rowKey={record => record.TagName} scroll={{ x: 1024 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;