import { Input } from 'antd';
import React from 'react';
import {UserOutlined} from '@ant-design/icons';

const AppInput = () => {

    const inputFunc = e => {
        const value = e.target.value;
        value && console.log(value);
    }

    return (
        <div className='container'>
            <div>
                <h2>Input Component</h2>
            </div>
            <Input
                style={{ width: '50%' }}
                prefix={<UserOutlined />}
                placeholder='name'
                onBlur={inputFunc}
                allowClear
            />
        </div>
    );
};

export default AppInput;