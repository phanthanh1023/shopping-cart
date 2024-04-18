import React from 'react';
import { PRODUCT } from '../../product';
import { Product } from './product';
import './shop.css';

const Shop = () => {
    return (
        <div className='shop'>
            <div className='shop-title'>
                <h1>Phan Thanh Shop</h1>
            </div>
            <div className='products'>
                {PRODUCT.map((product)=>(
                    <Product data={product}/> 
                ))}
            </div>
        </div>
    );
};

export default Shop;