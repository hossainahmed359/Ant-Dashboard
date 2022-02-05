import { Breadcrumb, Button, Input, Table } from 'antd';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import { SearchOutlined } from '@ant-design/icons';

const SearchTable = () => {


    const [dataSource, setDataSource] = useState([
        {
            name: 'John',
            age: '32',
            address: 'New York'
        },
        {
            name: 'Jim',
            age: '33',
            address: 'Sydney'
        },
        {
            name: 'David',
            age: '40',
            address: 'Japan'
        },
        {
            name: 'James',
            age: '32',
            address: 'New York'
        },
        {
            name: 'Sam',
            age: '40',
            address: 'Italy'
        },
    ]);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
                return <>
                            <Input 
                                autoFocus 
                                placeholder='Type name here'
                                value={selectedKeys[0]}
                                onChange={(e) => {
                                    setSelectedKeys(e.target.value?[e.target.value]:[]);
                                    confirm({closeDropdown: false})
                                }}
                                onPressEnter={() => confirm()}    
                                onBlur={() => confirm()}    
                            ></Input>
                            <Button onClick={() => confirm()} type='primary'>Search</Button>
                            <Button onClick={() => clearFilters()} type='danger'>Clear</Button>
                       </>;
            },
            filterIcon: () => {
                return <SearchOutlined/>;
            },
            onFilter: (value, record) => {
                return record.name.toLowerCase().includes(value.toLowerCase())
            }, 
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    return (
        <div>
            <div className='start_component'>
                <Breadcrumb>
                    <Breadcrumb.Item>Search Table</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='app_contents'>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                ></Table>
            </div>
        </div>
    );
};

export default SearchTable;