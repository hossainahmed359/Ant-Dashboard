import { Breadcrumb } from 'antd';
import React from 'react';

const SimpleTable = () => {
    return (
        <div>
            <div className='start_component'>
                <Breadcrumb>
                    <Breadcrumb.Item>Simple Table</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='app_contents'></div>
        </div>
    );
};

export default SimpleTable;