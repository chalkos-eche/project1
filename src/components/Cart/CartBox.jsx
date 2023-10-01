import React from 'react';
import CartItem from './CartItem';

const CartBox = () => {
	return (
		<div>
			<h2>카트</h2>
			<p>2</p>
			<CartItem />
			<CartItem />
			<CartItem />
		</div>
	);
};

export default CartBox;
