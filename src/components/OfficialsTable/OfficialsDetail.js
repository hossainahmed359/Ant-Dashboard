import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;


// Main function
const OfficialsDetail = ({record}) => {


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };


    return (
        <div>
            <div style={{maxWidth: '50%', margin: 'auto'}}>
                <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <p>Name:</p>
                        <Form.Item
                            name="fullname"
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                        >
                            <Input placeholder={record.name} defaultValue={record.name} />
                        </Form.Item>
                        <p>Email:</p>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                        <Input
                                type="email"
                                defaultValue={record.email}
                        />
                        </Form.Item>
                        <p>Phone:</p>
                        <Form.Item
                            name="phone"
                        >
                            <Input 
                                type=""
                                defaultValue={record.phone} 
                            />
                        </Form.Item>
                        <p>Id:</p>
                        <Form.Item
                            name="id"
                        >
                            <Input 
                                type=""
                                defaultValue={record._id} 
                            />
                        </Form.Item>
                        <p>Registered:</p>
                        <Form.Item
                            name="registered"
                        >
                            <Input 
                                type=""
                                defaultValue={record.registered} 
                            />
                        </Form.Item>
                        <p>Gender:</p>
                        <Form.Item
                            name="gender"
                        >
                            <Input 
                                type="text"
                                defaultValue={record.gender} 
                            />
                        </Form.Item>
                        <p>Phone:</p>
                        <Form.Item
                            name="phone"
                        >
                            <Input 
                                type=""
                                defaultValue={record.phone} 
                            />
                        </Form.Item>
                        <p>Company:</p>
                        <Form.Item
                            name="company"
                        >
                            <Input 
                                type="text"
                                defaultValue={record.company} 
                            />
                        </Form.Item>
                        <p>Address:</p>
                        <Form.Item
                            name="message"
                        >
                            <TextArea defaultValue={record.address} rows={4} />
                        </Form.Item>
                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                            {
                                validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                            ]}

                        >
                            <Checkbox>
                                I Agree with terms and conditions.
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Submit
                            </Button>
                        </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default OfficialsDetail;