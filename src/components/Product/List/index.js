import { Fragment } from "react";
import { Row, Col, Spin, Button, Card, Popconfirm } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import purify from "dompurify";

import "./styles.scss";

const { Meta } = Card;

const List = ({ products, isLoading }) => {
    const renderDescription = (description) => {
        return (
            <div dangerouslySetInnerHTML={{ __html: purify.sanitize(description) }} />
        );
    }

    const renderPrice = (price_sign, price) => {
        return (
            <div className="price">
                <b>{`${price_sign || "₹"} ${price}`}</b>
            </div>
        )
    }

    const renderEdit = (id) => {
        return (
            <EditOutlined key="edit" />
        );
    }

    const renderDelete = (id) => {
        return (
            <Popconfirm
                title="Are you sure to delete this product?"
                onConfirm={() => {}}
                onCancel={() => {}}
                okText="Yes"
                cancelText="No"
            >
                <DeleteOutlined type="danger" />
            </Popconfirm>
        );
    }

    return (
        <Fragment>
            <Row className="mb-3">
                <Col span={24} align="right">
                    <Button shape="circle" type="primary" icon={<PlusOutlined />}>
                    </Button>
                </Col>
            </Row>
            { isLoading ? (
                <Row>
                    <Col span={24}>
                        <div align="center">
                            <Spin />
                            <div> Fetching products...</div>
                        </div>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <Col span={24}>
                        {products.map(({ id, name, image_link, description, price_sign, price }) => (
                            <Card
                                hoverable
                                bordered
                                className="product-card"
                                style={{ width: 240 }}
                                cover={<img alt="example" src={image_link} />}
                                actions={[
                                    renderPrice(price_sign, price),
                                    renderEdit(id),
                                    renderDelete(id),
                                ]}
                            >
                                <Meta
                                    title={name}
                                    description={renderDescription(description)} 
                                />
                            </Card>
                        ))}
                    </Col>
                </Row>
            )}
        </Fragment>
    );
};

export default List;