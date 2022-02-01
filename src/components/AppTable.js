import { Table } from 'antd';
import React from 'react';

const AppTable = () => {

    const data = [
        {
            name: 'Name 1',
            age: 10,
            address: 'Address 1',
            key: 1
        },
        {
            name: 'Name 2',
            age: 20,
            address: 'Address 2',
            key: 2
        },
        {
            name: 'Name 3',
            age: 30,
            address: 'Address 3',
            key: 3
        },
        {
            name: 'Name 4',
            age: 40,
            address: 'Address 4',
            key: 4
        },
        {
            name: 'Name 5',
            age: 50,
            address: 'Address 5',
            key: 5
        },
        {
            name: 'Name 6',
            age: 60,
            address: 'Address 6',
            key: 60
        },
    ]


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'key',
            render: name => {
                return <a href='/'>{name}</a>
            }
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'key',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'key'
        },
        {
            title: 'Eligibility',
            key: 'key',
            render: payload => {return <p>{payload.age > 20 ? 'True' : 'False'}</p>}
        },
    ]


    return (
        <div className='container'>
            <div>
                <h2>Table Component</h2>
            </div>
            <div style={{width: '50%' , margin: 'auto'}}>
            <Table
            dataSource={data}
            columns={columns}
            ></Table>
            </div>
        </div>
    );
};

export default AppTable;