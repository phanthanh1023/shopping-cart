import React, { useContext } from 'react';
import { PRODUCT } from '../../product';
import { ShopContext } from '../../Context/shopContext';
import CartItem from './cart-item';
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const { cartItems, getTotalAmount } = useContext(ShopContext);
    const navigate = useNavigate();
    const totalAmount = getTotalAmount();
    return (
        <div className='cart'>
            <div className='title'>
                <h1 className='text-4xl font-bold m-5'>Your Cart Item</h1>
            </div>
            <div className='cart'>
                {PRODUCT.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className='checkout'>
                    <p >Subtotal:${totalAmount}</p>
                    <button onClick={() => (navigate("/"))}>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
            ) : (
                <h1 className='font-bold text-3xl'>Your Cart Emty</h1>
            )}
        </div>
    );
};

export default Cart;