import React from 'react';
import CartItem from './CartItem';
import { styled } from 'styled-components';

const CartBoxWrapper = styled.div`
	width: 100%;
	background-color: blue;
`;
const CartItemList = styled.div`
	width: 100%;
	background-color: #2d303e;
	border-radius: 2rem;
	height: 10rem;
`;

const CartBox = () => {
	return (
		<CartBoxWrapper>
			<p>
				카트
				<span>2</span>
			</p>
			<CartItemList>
				<CartItem />
				<CartItem />
				<CartItem />
			</CartItemList>
		</CartBoxWrapper>
	);
};

export default CartBox;
