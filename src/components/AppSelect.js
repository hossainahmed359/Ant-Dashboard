import { Select } from 'antd';
import React from 'react';
const {Option} = Select;

const AppSelect = () => {

    const fruits = ['Banana', 'Mango', 'Orange', 'Apple', 'Watermelon', 'Guava', 'Pineapple'];

    const children = [];
    for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value) {
    console.log(value);
    }

  

    return (
        <div className='container'>
        <div>
            <h2>Select Component</h2>
        </div>
        <p>Choose your favorite fruits</p>
        <Select placeholder="Select your favorite fruit"  mode='multiple' style={{width: '300px'}}>
            {fruits.map(fruit => <Option key={fruits.indexOf(fruit)}>{fruit}</Option>)}
        </Select>
        <br/>
        <br/>
        <Select
        mode="tags"
        placeholder="Please select"
        defaultValue={['Banana']}
        onChange={handleChange}
        style={{ width: '50%' }}
      >
        {children}
      </Select>
    </div>
    );
};

export default AppSelect;