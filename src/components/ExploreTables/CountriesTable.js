import { Breadcrumb, Table } from 'antd';
import React from 'react';

const CountriesTable = () => {
    return (
        <div>
            <div className='start_component'>
                <Breadcrumb>
                    <Breadcrumb.Item>Countries Table</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='app_contents'>
                <Table columns={[]} dataSource={[]}></Table>
            </div>
        </div>
    );
};

export default CountriesTable;