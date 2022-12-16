import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './../actions/ProductsAction';
import Product_Item from './Product_Item';
import { NavLink } from "react-router-dom";

function Products() {
    let dispatch = useDispatch();
    const products = useSelector(state => state.ProductRD);
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    return (
        <div className="mt-3" style={{width:"90%",margin:"auto"}}>
            <NavLink exact to="/add">
                <div className="btn btn-primary mb-2 text-white">Добавить задачу</div>
            </NavLink>
            <table className="table table-striped" style={{width:"100%"}}>
            <tbody>
                <tr>
                    <th>Название</th>
                    <th>Примечание</th>
                    <th>Статус</th>
                    <th></th>
                </tr>
                {products.map(product => {
                    return <Product_Item key={product.id} products={product} />
                })}
               </tbody>
            </table>
        </div>
    );
}

export default Products;