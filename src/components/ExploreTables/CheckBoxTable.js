import { Breadcrumb, Table, Tag } from 'antd';
import React from 'react';
import { useState } from 'react/cjs/react.development';

const CheckBoxTable = () => {


    const [alreadySelectedRows, setAlreadySelectedRows] = useState(['1', '3'])

    const columns = [
        {
            title: 'Student Id',
            dataIndex: 'id',
            key: '1'
        },
        {
            title: 'Student Name',
            dataIndex: 'name',
            key: '2'
        },
        {
            title: 'Student Grade',
            dataIndex: 'grade',
            key: '3',
            render: (tag) => {
                const color = tag.includes('A') ? 'Green' : tag.includes('B') ? 'Blue' : 'Red';
                return <Tag color={color}>{tag}</Tag>
            },
        },
    ];

    const dataSource = [
        {
            key: '1',
            id: 1,
            name: 'Student Name 1',
            grade: 'A+'
        },
        {
            key: '2',
            id: 2,
            name: 'Student Name 2',
            grade: 'A'
        },
        {
            key: '3',
            id: 3,
            name: 'Student Name 3',
            grade: 'B'
        },
        {
            key: '4',
            id: 4,
            name: 'Student Name 4',
            grade: 'C'
        },
        {
            key: '5',
            id: 5,
            name: 'Student Name 5',
            grade: 'A'
        },
    ];

    return (
        <div>
            <div className='start_component'>
                <Breadcrumb>
                    <Breadcrumb.Item>Checkbox Table</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='app_contents'>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowSelection={{
                        type: 'checkbox',
                        selectedRowKeys: alreadySelectedRows,
                        onChange: (keys) => {
                            setAlreadySelectedRows(keys)
                        },
                        onSelect:(record) => {
                            // console.log(record);
                        },
                        getCheckboxProps:(record) => ({
                            disabled:record.grade === 'C'
                        }),
                        hideSelectAll: true,
                        selections:[
                            Table.SELECTION_NONE,
                            Table.SELECTION_ALL,
                            Table.SELECTION_INVERT
                            // Logic here
                        ]
                    }}
                ></Table>
            </div>
        </div>
    );
};

export default CheckBoxTable;