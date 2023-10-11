import React from 'react';
import { styled } from 'styled-components';
import Image1 from '../../assets/images/Item1.png';
const StyledCartItem = styled.div`
	width: 8.4rem;
	height: 8.4rem;
	/* background-color: #edf2f7; */
	background-color: darkblue;
	border-radius: 2rem;
	margin: 1rem;
	& img {
		width: 10px;
		height: 10px;
	}
	& button {
		background-color: #fff;
		border-radius: 0.4rem;
		height: 1.6rem;
		width: 1.6rem;
		color: #000;
		text-align: center;
	}
	& span {
	}
`;
const CartItem = () => {
	return (
		<StyledCartItem>
			<img src={Image1} alt="" />
			<p>분홍 꽃밭</p>
			<div>
				<button>-</button>
				<span>1</span>
				<button>+</button>
			</div>
		</StyledCartItem>
	);
};

export default CartItem;
