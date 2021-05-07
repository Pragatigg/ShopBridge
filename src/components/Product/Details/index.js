import PropTypes from 'prop-types';
import { Row, Col, Input, Button, Space, Card } from "antd";
import { Link } from "react-router-dom";
import './styles.scss';

const { TextArea } = Input;

const Details = ({ product, isLoading, isNew }) => {
    const { 
        name, 
        description, 
        price, 
        price_sign: priceSign,
        image_link: imageLink 
    } = product;
    return (
        <Card bordered={false} className="product-detail-card">
            <Row className="mb-3">
                <Col span={4}>
                    Name:
                </Col>
                <Col span={20}>
                    <Input value={name} placeholder="Product Name" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col span={4}>
                    Description:
                </Col>
                <Col span={20}>
                    <TextArea rows={3} value={description} placeholder="Product Description" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col span={4}>
                    Price Symbol:
                </Col>
                <Col span={20}>
                    <Input value={priceSign} placeholder="Product price symbol" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col span={4}>
                    Price:
                </Col>
                <Col span={20}>
                    <Input value={price} placeholder="Product Price" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col span={4}>
                    Image URL:
                </Col>
                <Col span={20}>
                    <Input value={imageLink} placeholder="Product Image URL" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col span={24} align="right">
                    <Space>
                        <Button type="primary" loading={isLoading}>
                            {isNew ? "Create Product" : "Update Product"}
                        </Button>
                        <Link to="/">
                            <Button> Cancel </Button>
                        </Link>
                    </Space>
                </Col>
            </Row>
        </Card>
    );
};

Details.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string, 
        image_link: PropTypes.string,
        description: PropTypes.string,
        price_sign: PropTypes.string,
        price: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    }).isRequired,
    isLoading: PropTypes.bool.isRequired,
    isNew: PropTypes.bool.isRequired
};

export default Details;