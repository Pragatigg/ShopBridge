import { useEffect } from 'react';
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from 'components/Product/Details';
import { fetchProduct, updateProduct, resetProduct } from 'redux/actions/product';

const List = () => {
    const { params: { id }} = useRouteMatch();
    const isNew = !id;
    const dispatch = useDispatch();
    const { isLoading, data, isUpdating } = useSelector(state => state.product);
    const onSubmit = () => {
      dispatch(updateProduct(id, data));
    };

    useEffect(() => {
        if (id) {
            dispatch(fetchProduct(id));
        }
    }, [dispatch]);

    useEffect(() => () => dispatch(resetProduct()), [dispatch]);


    return (
        <ProductDetails
            product={data}
            isLoading={isLoading}
            isUpdating={isUpdating}
            isNew={isNew}
            onSubmit={onSubmit}
        />
    )
};

export default List;
