import { useEffect } from 'react';
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from 'components/Product/Details';
import { fetchProduct } from 'redux/actions/product';

const List = () => {
    const { params: { id }} = useRouteMatch();
    const dispatch = useDispatch();
    const { isLoading, data } = useSelector(state => state.product)
    
    useEffect(() => {
        if (id) {
            dispatch(fetchProduct(id));
        }
    }, [dispatch]);


    return (
        <ProductDetails 
            product={data}
            isLoading={isLoading}
            isNew={!id}
        />
    )
};

export default List;