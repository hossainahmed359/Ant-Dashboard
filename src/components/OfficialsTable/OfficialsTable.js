import { Breadcrumb, Table, Typography , Modal, Button, Input,  Space} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import OfficialsDetail from './OfficialsDetail';

const { Text} = Typography;
const {Search} = Input;

const OfficialsTable = () => {

    
    // Data Loading
    const [data , setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('./fakeData/officials.json')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
      
    },[])

    // console.log(data[0])

    // Modal Option 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };


    // Handle Search
    const onSearch = (e, dataIndex) => {
        console.log(e, dataIndex)
    };

    // Table columns  
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: '_id',
            render: (payload, record) => {return <>
                <Button type="link" onClick={showModal}>
                    {payload}
                </Button>
                <Modal
                width={'100%'} 
                title="Details" 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
                mask={false}
                >
                    <OfficialsDetail key={record._id} record={record}/>
                </Modal>
               </>}, 
        },
        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
            searchText: '61f773782ea717cb1f4ff411'
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: '_id'
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: '_id',
            filters: [{text: 'Male', value: 'male'}, {text: 'Female', value: 'female'}],
            onFilter: (value, record) => record.gender === value,
            render: payload => payload === 'male' ? 
                <Text className='male'>Male</Text> 
                : 
                <Text className='female'>Female</Text>
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: '_id'
        },
    ]

    return (
        <div>
             <div className='start_component'>
                <Breadcrumb>
                    <Breadcrumb.Item>Officials Table</Breadcrumb.Item>
                </Breadcrumb>
             </div>
            <div className='app_contents'>
                <div className='search_container'>
                    <div className='input_contents'>
                        <Text type='' style={{marginRight: '0.5rem'}}>Name:</Text>
                        <Search placeholder="Search by name" allowClear onSearch={() => onSearch('name')} style={{ maxWidth: 200 }} />
                    </div>
                    <div className='input_contents'>
                        <Text type='' style={{marginRight: '0.5rem'}}>Id:</Text>
                        <Search placeholder="Search by Id" allowClear onSearch={ () => onSearch('_id')} style={{ maxWidth: 200 }} />
                    </div>
                    <div className='input_contents'>
                        <Text type='' style={{marginRight: '0.5rem'}}>Company:</Text>
                        <Search placeholder="Search by company" allowClear onSearch={() => onSearch('company')} style={{ maxWidth: 200 }} />
                    </div>
                </div> 
               <Table
                    loading={loading}
                    dataSource={data}
                    columns={columns}
               ></Table>
               
            </div>
        </div>
    );
};

export default OfficialsTable;