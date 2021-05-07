import { Fragment } from "react";
import { Row, Col, Table, Button, Tooltip, Space, Popconfirm } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import purify from "dompurify";

const COLUMNS = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (desc) => (
          <div dangerouslySetInnerHTML={{ __html: purify.sanitize(desc) }} />
      )
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 100,
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

const List = ({ products, isLoading }) => {
    return (
        <Fragment>
            <Row className="mb-3">
                <Col span={24} align="right">
                    <Button type="primary" icon={<PlusOutlined />}>
                        Add New Product
                    </Button>
                </Col>
            </Row>
            <Table
                bordered
                columns={COLUMNS}
                dataSource={products}
                loading={isLoading} 
            />
        </Fragment>
    );
};

export default List;