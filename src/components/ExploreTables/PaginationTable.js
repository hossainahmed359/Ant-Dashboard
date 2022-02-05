import { Breadcrumb, Table } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const PaginationTable = () => {

    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    // Pagination 
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id'
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Trips',
            render: (record) => {
                const trips = record?.trips;
                return !trips ? 0 : trips;
            }
        },
    ];


    useEffect(() => {
        setLoading(true)
        fetchRecords(1, 10);
    },[])

    const fetchRecords = (page, pageSize) => {
        fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${pageSize}`)
            .then(res => res.json())
            .then(res => {
                setDataSource(res.data);
                setTotalPages(res.totalPages);
                setPageSize(pageSize)
            })
            .catch(err => console.log(err))
            .finally(() => {setLoading(false)})
    };

    return (
        <div>
            <div className='start_component'>
                <Breadcrumb>
                    <Breadcrumb.Item>Pagination Table</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='app_contents'>
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={dataSource}
                    pagination={{
                        pageSize: pageSize,
                        total: totalPages,
                        onChange: (page , pageSize)=> {
                            fetchRecords(page, pageSize)
                        }
                    }}
                ></Table>
            </div>
        </div>
    );
};

export default PaginationTable;