import PropTypes from 'prop-types';
import { Card, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import purify from 'dompurify';
import { Link } from 'react-router-dom';

import './styles.scss';

const { Meta } = Card;

const ProductCard = ({ product }) => {
    const { id, name, image_link: imageLink, description, price_sign: priceSign, price } = product;
    const renderDescription = () => (
        <div dangerouslySetInnerHTML={{ __html: purify.sanitize(description) }} />
    );

    const renderPrice = () => (
        <div className="price">
            <b>{`${priceSign || "₹"} ${price}`}</b>
        </div>
    );

    const renderEdit = () => (
        <Link to={`/products/${id}`}>
            <EditOutlined key="edit" />
        </Link>
    );

    const renderDelete = () => (
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

    return (
        <Link to={`/products/${id}`}>
            <Card
                hoverable
                bordered
                className="product-card"
                style={{ width: 240 }}
                cover={<img alt="example" src={imageLink} />}
                actions={[
                    renderPrice(),
                    renderEdit(),
                    renderDelete(),
                ]}
            >
                <Meta
                    title={name}
                    description={renderDescription(description)} 
                />
            </Card>
        </Link>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string, 
        image_link: PropTypes.string,
        description: PropTypes.string,
        price_sign: PropTypes.string,
        price: PropTypes.number
      }).isRequired
};

export default ProductCard;