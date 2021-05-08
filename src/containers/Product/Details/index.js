import { useState, useEffect } from 'react';
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import ProductDetails from 'components/Product/Details';
import { fetchProduct, updateProduct, resetProduct, formUpdate } from 'redux/actions/product';
import { formatError } from "utils";

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  price_sign: yup.string().required(),
  image_link: yup.string().required()
});

const List = () => {
    const [validationErrors, setValidationErrors] = useState({});
    const { params: { id }} = useRouteMatch();
    const isNew = !id;
    const dispatch = useDispatch();
    const { isLoading, data, isUpdating } = useSelector(state => state.product);
    const onSubmit = () => {
      schema.isValid(data)
      .then(valid => {
        if (!valid) {
          schema.validate(data, { abortEarly: false })
          .catch((err) => {
            let validationMsg = {};
            err.inner.forEach(({ path, message }) => {
              validationMsg = {
                ...validationMsg,
                [path]: formatError(message)
              }
            });
            setValidationErrors(validationMsg);
          });
        } else {
          setValidationErrors({});
          dispatch(updateProduct(id, data));
        }
      });
    };
    const onFieldChange = newProduct => dispatch(formUpdate(newProduct));

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
            onFieldChange={onFieldChange}
            validationErrors={validationErrors}
        />
    )
};

export default List;
