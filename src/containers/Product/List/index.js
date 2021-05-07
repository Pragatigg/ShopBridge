import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from 'components/Product/List';
import { fetchProducts, deleteProduct } from 'redux/actions/product';

const List = () => {
    const dispatch = useDispatch();
    const { isLoading, data } = useSelector(state => state.products)
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const onDeleteProduct = id => dispatch(deleteProduct(id));

    return (
        <ProductList 
            products={data}
            isLoading={isLoading}
            onDeleteProduct={onDeleteProduct}
        />
    )
};

export default List;