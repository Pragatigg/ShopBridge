import { Fragment } from "react";
import { Row, Col, Table, Button, Tooltip, Space, Popconfirm } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { DATA } from "./constants";

const COLUMNS = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'action',
        render: () => (
            <Space>
                <Tooltip title="edit">
                    <Button type="primary" shape="circle" icon={<EditOutlined />} />
                </Tooltip>
                <Popconfirm
                    title="Are you sure to delete this product?"
                    onConfirm={() => {}}
                    onCancel={() => {}}
                    okText="Yes"
                    cancelText="No"
                >
                    <Tooltip title="delete">
                        <Button type="danger" shape="circle" icon={<DeleteOutlined />} />
                    </Tooltip>
                </Popconfirm>
            </Space>
        )
    }
];

const List = () => {
    return (
        <Fragment>
            <Row className="mb-3">
                <Col span={24} align="right">
                    <Button type="primary" icon={<PlusOutlined />}>
                        Add New Product
                    </Button>
                </Col>
            </Row>
            <Table bordered columns={COLUMNS} dataSource={DATA} />
        </Fragment>
    );
};

export default List;