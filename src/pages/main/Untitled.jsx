import React from 'react';
import { useCartStore } from '../../store/practice';
import { ItemList } from '../../store/practice';

const Untitled = () => {
	const { defaultCart, increaseCart, decreaseCart } = useCartStore();

	const handleIncrease = value => {
		increaseCart({
			cid: defaultCart.length,
			pid: value.pid,
			contents: value.contents,
			price: value.price,
		});
		console.log(defaultCart);
	};
	const handleDecrease = value => {
		decreaseCart(value);
		console.log(defaultCart);
	};
	const totalAmount = defaultCart
		? defaultCart.reduce((acc, item) => {
				return acc + item.amount;
		  }, 0)
		: 0;
	const totalPrice = defaultCart
		? defaultCart.reduce((acc, item) => {
				return acc + item.price * item;
		  }, 0)
		: 0;
	return (
		<div>
			<h1>Store test</h1>
			<div>
				<h2>아이템 목록</h2>
				<main>
					{ItemList.map(item => (
						<div key={item.pid}>
							<p>{item.contents}</p>
							<b>가격:{item.price}</b>
							<button onClick={() => handleIncrease(item)}>추가</button>
						</div>
					))}
				</main>
			</div>
			<h2>장바구니</h2>
			<p>
				토탈 수량 <span>{totalAmount}</span>
			</p>
			<p>
				합계 <span>{totalPrice}</span>
			</p>
			<h3>아이템 목록</h3>
			<ol>
				{defaultCart.map(item => (
					<li key={item.cid}>
						{item.contents}
						<button
							onClick={() => {
								handleIncrease(item);
							}}
						>
							+
						</button>
						수량: {item.amount}
						<button
							onClick={() => {
								handleDecrease(item);
							}}
						>
							-
						</button>
					</li>
				))}
			</ol>
		</div>
	);
};

export default Untitled;
