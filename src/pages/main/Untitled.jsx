import React from 'react';
import { useCartStore } from '../../store/practice';
import { ItemList } from '../../store/practice';

const Untitled = () => {
	// const { defaultCart, increaseCart, decreaseCart } = useCartStore();
	const defaultCart = useCartStore(state => state.defaultCart);
	const increaseCart = useCartStore(state => state.increaseCart);
	const decreaseCart = useCartStore(state => state.decreaseCart);
	// zustand의 불필요한 렌더링 최적화
	// BEFORE :
	// const { defaultCart, increaseCart, decreaseCart } = useCartStore();
	// 모든 store를 가져오기 때문에, 하나의 상태변경으로 모든 컴포넌트가 리렌더링됨
	// after :
	// const increaseCart = useCartStore((state)=>state.increaseCart);
	// const decreaseCart = useCartStore((state)=>state.decreaseCart);
	// useStore()가 아닌, 컴포넌트에 필요한 액션들만 호출하기.
	// AFTER :
	// shallow 를 가져와서 두번쨰 인자에 shallow 등록
	//
	// shallow 함수는 객체의 내부 속성 값도 비교함
	// 메모리 주소가 변경되지 않고 객체 내부값의 변동이 있을 시 리렌더링 변동

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
