import { Card, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import purify from "dompurify";
import { Link } from "react-router-dom";

import "./styles.scss";

const { Meta } = Card;

const ProductCard = ({ product }) => {
    const { id, name, image_link, description, price_sign, price } = product;
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
            <Link to={`/products/${id}`}>
                <EditOutlined key="edit" />
            </Link>
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
        <Link to={`/products/${id}`}>
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
        </Link>
    );
}

export default ProductCard;