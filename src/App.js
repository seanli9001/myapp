import 'antd/dist/antd.css'
import React, { Component } from 'react';
import './App.css';
import { Button, Input, DatePicker, Table } from 'antd';
//import TableEB from './Tables/tableEB';
//import logo from './logo.svg';
//import Game from './Game/Game';

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
    console.log(date, dateString);
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

  //elements.map(item => {return item.ValueConfirm}) 与 
  //elements.map(function(item){return item.ValueConfirm})一样
  handleSubmit = () => {
    let submitConfirmValue = this.state.data.map(item => {
      return item.ValueConfirm * 1
    })
    //修改确认值后，确认值以数组的形式显示、或者回传。
    //console.log(data)
    console.log(submitConfirmValue);
  }
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
    this.columns = [
      { title: '项目', width: 100, dataIndex: 'Name', key: 'projectName', fixed: 'left' },
      { title: '位号', width: 100, dataIndex: 'TagName', key: 'tagName', fixed: 'left' },
      { title: '单位', dataIndex: 'UOM', key: 'UOM' },
      { title: '原始值', dataIndex: 'Value', key: 'originalValue' },
      {
        title: '确认值', dataIndex: 'ValueConfirm', key: 'confirmValue', render: (text, record) => {
          return <Input value={text} onChange={(ev) => { this.handleConfirmValueChange(ev, record) }} />
        }
      },
      { title: '备注', dataIndex: 'Description', key: 'noteText' }
    ];
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">fuck off sdasdasdasd</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type={'primary'} onClick={this.handleClick}>hit me</Button>
        <h4>{this.state.text}</h4> */}
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
            <div>
              <Table columns={this.columns} dataSource={this.state.data} pagination={{ pageSize: 12 }} rowKey={record => record.TagName} scroll={{ x: 1024 }} />
            </div>
            {/* <div className="tablecontent">
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
            </div> */}
            {/* <TableEB /> */}
          </div>
        </div>
        {/*<Game />*/}
      </div>
    );
  }
}

export default App;


  // test = (_selectedElements, _searchedElements) => {
  //   {
  //     const selectedElements = [{ WebId: 'a', Timestamp: 'a' }, { WebId: 'b' }]
  //     const searchedElements = [{ WebId: 'a', Timestamp: 'a' }, { WebId: 'c' }]

  //     let flag = false;
  //     let isExsit = []
  //     //let result = newSelectedElements.concat(newSearchedElements)

  //     // function selectedByWebId(value) {
  //     //   return item => value === item.WebId
  //     // }

  //     // function selectedByWebId(searchedElementItemWebId) {
  //     //   return function (selectedElementItem) {
  //     //     return selectedElementItem.WebId === searchedElementItemWebId
  //     //   }
  //     // }
  //     if (selectedElements==false) {
  //       flag=false;
  //     }
  //     else{
  //       isExsit=searchedElements.map(item => {
  //         let idx = _findIndex(selectedElements, {WebId: item.WebId})
  //         return idx
  //       })
  //       // flag = (isExsit.length === searchedElements.length)

  //       flag = (isExsit.indexOf(-1) === -1)
  //     }
  //     console.log(flag);
  //   }
  // }
  // // test = (_selectedElements, _searchedElements) => {
  // //   const selectedElements = []
  // //   const searchedElements = []

  // //   let flag = false;
  // //   let isExsit = []
  // //   let result = selectedElements.concat(searchedElements)

  // //   isExsit = searchedElements.map(item => {
  // //     let idx = _findIndex(selectedElements, item)
  // //     return idx
  // //   })

  // //   result==false
  // //     ? (flag = false)
  // //     : (isExsit.indexOf(-1) === -1)
  // //       ? (flag = true)
  // //       : flag;

  // //   console.log(flag);
  // // }


  // test1 = (_selectedElements, _searchedElements, isCheckAll=true) => {
  //     let selectedElements = [{WebId: 'a'}, {WebId: 'b'}]
  //     let searchedElements = [{WebId: 'b'}, {WebId: 'c'}]
  //     const newConcatArray=[];


  //     if (isCheckAll) {
  //       let concatArray = [...selectedElements, ...searchedElements];
  //       // let objConcatArray=concatArray.map(item=>item.WebId);
  //       concatArray.forEach(item=>{
  //         if (!newConcatArray.find(item1 => item.WebId===item1.WebId)) {
  //           newConcatArray.push(item)
  //         }
  //       });
  //     } else {
  //       selectedElements.forEach(item => {
  //         if(searchedElements.find(item1 => item.WebId === item1.WebId)) {
  //           newConcatArray.push(item)
  //         }
  //       })
  //     }
  //     return newConcatArray
  //     // else {
  //     //   let objSelected = newSelectedElements.map(item => item.WebId);
  //     //   let objSearched = newSearchedElements.map(item => item.WebId);
  //     //   let newObjSelected = []
  //     //   for (let i = 0; i < newSearchedElements.length; i++) {
  //     //     isExsit.push(objSelected.indexOf(objSearched[i]))
  //     //   }

  //     //   for (let j = isExsit.length - 1; j >= 0; j--) {
  //     //     let index = isExsit[j];
  //     //     if(index != -1){
  //     //       newObjSelected.push(objSelected[index])
  //     //     }
  //     //     newFinalArray = newObjSelected.map(item => {
  //     //       return {
  //     //         WebId:item
  //     //       }
  //     //     })
  //     //   }
  //     // }
  //     //return [...selectedElements]
  // }