import { Breadcrumb, Button, Input, Modal, Table } from 'antd';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';


const CrudTable = () => {

    // Modal
    const [isEditing, setIsEditing] = useState(false);
    // Editing
    const [editingPerson, setEditingPerson] = useState(null);

    // Data source
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: 'John',
            email: 'john@gmail.com',
            address: 'John Address'
        },
        {
            id: 2,
            name: 'David',
            email: 'david@gmail.com',
            address: 'David Address'
        },
        {
            id: 3,
            name: 'James',
            email: 'james@gmail.com',
            address: 'James Address'
        },
        {
            id: 4,
            name: 'Sam',
            email: 'sam@gmail.com',
            address: 'Sam Address'
        },
        {
            id: 5,
            name: 'John',
            email: 'john@gmail.com',
            address: 'john Address'
        },
    ]);

    // Columns
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'Email',
            dataIndex: 'email'
        },
        {
            key: '4',
            title: 'Address',
            dataIndex: 'address'
        },
        {
            key: '5',
            title: 'Actions',
            render: (record) => {
                return( 
                <>
                    <EditOutlined onClick={() => onUpdate(record)}/>
                    <DeleteOutlined onClick={() => onDeletePerson(record)} style={{color: 'red', marginLeft: '15px'}}/>
                </>)
            },
        },
    ];

    // Add function
    const onAddPerson = () => {

        const randomNumber = parseInt(Math.random()*1000);

        setDataSource(pre => {
            const newPerson = {
                id: randomNumber,
                name: 'Name' + randomNumber,
                email: randomNumber + '@gmail.com',
                address: 'Address' + randomNumber,
            }

            return [...pre, newPerson]
        })
    };

    // Delete function
    const onDeletePerson = (record) => {
        Modal.confirm({
            title: 'Are you sure you want to delete?',
            okType: 'danger',
            onOk: () => {
                setDataSource(pre => {
                    return  pre.filter(person => person.id !== record.id);
                  })
            }
        })
    };

    // Update function
    const onUpdate = (record) => {
        setIsEditing(true);
        setEditingPerson({...record});
    }

    const resetEditing = () => {
        setIsEditing(false);
        setEditingPerson(null);
    }

    return (
        <div>
             <div className='start_component'>
                <Breadcrumb>
                    <Breadcrumb.Item>Crud Table</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='app_contents'>
                <Button onClick={onAddPerson} style={{marginBottom: '1rem'}}>Add Person</Button>
                <Table
                    pagination
                    columns={columns}
                    dataSource={dataSource}
                ></Table>
                <Modal
                    visible={isEditing}
                    title="Edit Person"
                    okText="Save"
                    onCancel={() => {
                        resetEditing()
                }}
                    onOk={() => {
                        // console.log(editingPerson)
                        setDataSource(pre => {
                            return pre.map(person => {
                                if (person.id === editingPerson.id) {
                                    return editingPerson;
                                } else {
                                    return person;
                                }
                            })
                        })

                        // Modal close option
                        setIsEditing(false)    
                    }}
                >
                    <Input value={editingPerson?.name} onChange={(e) => {
                        setEditingPerson(pre => {
                            return {...pre, name: e.target.value}
                        })
                    }}></Input>
                    <Input value={editingPerson?.email} onChange={(e) => {
                        setEditingPerson(pre => {
                            return {...pre, email: e.target.value}
                        })
                    }}></Input>
                    <Input value={editingPerson?.address} onChange={(e) => {
                        setEditingPerson(pre => {
                            return {...pre, address: e.target.value}
                        })
                    }}></Input>
                </Modal>
            </div>
        </div>
    );
};

export default CrudTable;