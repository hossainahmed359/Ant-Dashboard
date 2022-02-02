import { Breadcrumb, Table } from 'antd';
import React, { useEffect, useState } from 'react';

const SimpleTable = () => {

    // Set loaded data && Loading function && Custom pagination
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    // Load data from the server
    useEffect( () => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    },[]);

    // Set Table columns
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: '1',
        },
        {
            title: 'User Id',
            dataIndex: 'userId',
            key: '2',
            // Sorter
            sorter: (record1 , record2) => {
                return record1.userId > record2.userId;
            },
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: '3',
        },
        {
            title: 'Status',
            dataIndex: 'id',
            key: '4',
            /* The render option gives the ability to render something dynamically or custom */
            render: completed => {
                return <p>{completed ? 'Complete' : 'In Progress' }</p>
            },
            // Filters
            filters: [{text: 'Complete', value: true}, {text: 'In Progress', value: false}],
            onFilter: (value, record) => {
                return record.completed === value;
            },

        },
    ]

    return (
        <div>
            <div className='start_component'>
                <Breadcrumb>
                    <Breadcrumb.Item>Simple Table</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='app_contents'>
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        current: page, 
                        pageSize: pageSize, 
                        total: 500,
                        onChange:(page, pageSize) => {
                            setPage(page);
                            setPageSize(pageSize)
                            // Make the api call here with page and page size
                        } 
                    }}
                ></Table>
            </div>
        </div>
    );
};

export default SimpleTable;