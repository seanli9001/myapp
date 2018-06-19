import 'antd/dist/antd.css';
import React, { Component } from 'react';
import '../App.css';
import { Table, Input } from 'antd';

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

// const columns = [
//     { title: '项目', width: 100, dataIndex: 'Name', key: 'projectName', fixed: 'left' },
//     { title: '位号', width: 100, dataIndex: 'TagName', key: 'tagName', fixed: 'left' },
//     { title: '单位', dataIndex: 'UOM', key: 'UOM' },
//     { title: '原始值', dataIndex: 'Value', key: 'originalValue' },
//     {
//         title: '确认值', dataIndex: 'ValueConfirm', key: 'confirmValue', render: (text, record) => {
//             if (this.state.editCacheData.find(item => item.key == record.key)) {
//                 //编辑状态
//                 return <Input value={text} onChange={(e) => { this.textChange(e, record) }} />
//             }
//             return text
//         }
//     },
//     { title: '备注', dataIndex: 'Description', key: 'noteText' },
//     // { title: 'Column 5', dataIndex: 'address', key: '5' },
//     // { title: 'Column 6', dataIndex: 'address', key: '6' },
//     // { title: 'Column 7', dataIndex: 'address', key: '7' },
//     // { title: 'Column 8', dataIndex: 'address', key: '8' },
//     // {
//     //   title: 'Action',
//     //   key: 'operation',
//     //   fixed: 'right',
//     //   width: 100,
//     //   render: () => <a href="javascript:;">action</a>,
//     // },
// ];

//   const data = [{
//     key: '',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York Park',
//   }, {
//     key: '2',
//     name: 'Jim Green',
//     age: 40,
//     address: 'London Park',
//   }];
class TableEB extends React.Component {
    
    handleChange = (ev, record) => {
        let finalValue = ev.target.value
        let data = this.state.data.slice()
        var idx = data.findIndex(item => item.TagName === record.TagName)
        data[idx].ValueConfirm = finalValue
        this.setState({
            data: data
        })
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
                return <Input value={text} onChange={(ev) => { this.handleChange(ev, record) }} />
                }
            },
            { title: '备注', dataIndex: 'Description', key: 'noteText' }
        ];
    }
    render() {
        return (
            <div>
                <Table columns={this.columns} dataSource={this.state.data} pagination={{ pageSize: 12 }} rowKey={record => record.TagName} scroll={{ x: 1024 }} />
            </div>
        )
    }
}

export default TableEB