import { Breadcrumb, Table } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';


const AppTableCrud = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect( () => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
            })
    },[]);


    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: '1'
        },
        {
            title: 'User Id',
            dataIndex: 'userId',
            key: '2',
            sorter: (record1, record2) => {
                return record1.userId  - record2.userId
            }
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: '3'
        },
        {
            title: 'Completed',
            dataIndex: 'completed',
            key: '4',
            render: complete => complete ? 'Complete' : 'In Progress',
            filters: [{text: 'Complete', value: true} , {text: 'In Progress', value: false}],
            onFilter: (value, record) => {
                return record.completed === value;
            }
        },
    ];

    return (
        <div>
            <div className='start_component'>
            <Breadcrumb>
                <Breadcrumb.Item>Todos Table</Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className='app_contents'>
                <Table
                loading={loading} 
                dataSource={data}
                columns={columns}
                /* pagination={{
                    pageSize: 15,
                }} */
                ></Table>
            </div>
        </div>
    );
};

export default AppTableCrud;