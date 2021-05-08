import PropTypes from 'prop-types';
import { Row, Col, Spin, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import ProductCard from 'components/Product/Card';

import './styles.scss';

const List = ({ products, isLoading, onDeleteProduct }) => (
    <>
        <Row className="mb-3">
            <Col xs={14} sm={16} md={20} lg={20} xl={20} />
            <Col xs={6} sm={8} md={4} lg={4} xl={4} align="right">
                <Link to="/new">
                    <Button
                      className="fixed-icon-btn"
                      shape="circle"
                      type="primary"
                      icon={<PlusOutlined />}
                    />
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
                        <span key={product.id}>
                            <ProductCard
                                product={product}
                                onDeleteProduct={onDeleteProduct}
                            />
                        </span>
                    ))}
                </Col>
            </Row>
        )}
    </>
);

List.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image_link: PropTypes.string,
        description: PropTypes.string,
        price_sign: PropTypes.string,
        price: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    })).isRequired,
    isLoading: PropTypes.bool.isRequired,
    onDeleteProduct: PropTypes.func.isRequired
};

export default List;
