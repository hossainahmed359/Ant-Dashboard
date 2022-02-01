import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const AppButton = () => {

    const [isLoading, setIsLoading] = useState(false)

    const onButtonClick = e => {
        console.log('Button is clicked');
        setIsLoading(true);
        setTimeout( () => {
            setIsLoading(false)
        }, 2000);
    }

    const [toggle, setToggle] = useState(false)

    return (
        <div className='container'>
            <div>
                <h2>Button Component</h2>
            </div>
            <p>This is {toggle ? 'True' : 'False'}</p>
            <Button 
            onClick={onButtonClick} 
            type="primary"
            loading={isLoading}
            icon={<PoweroffOutlined />}
            >
                 Primary Button
            </Button>
             <Button onClick={() => setToggle(preValue => !preValue)} size='small' type="link">Toggle Button</Button>
             {/* <Button type="primary" block>Block Button</Button> */} 
        </div>
    );
};

export default AppButton;