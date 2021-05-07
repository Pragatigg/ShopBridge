import { Fragment } from 'react';
import { Row, Col, Spin, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import ProductCard from 'components/Product/Card';

import './styles.scss';

const List = ({ products, isLoading }) => {
    return (
        <Fragment>
            <Row className="mb-3">
                <Col span={24} align="right">
                    <Link to="/new">
                        <Button shape="circle" type="primary" icon={<PlusOutlined />}>
                        </Button>
                    </Link>
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
                        {products.map(product => (
                            <ProductCard product={product} />
                        ))}
                    </Col>
                </Row>
            )}
        </Fragment>
    );
};

export default List;