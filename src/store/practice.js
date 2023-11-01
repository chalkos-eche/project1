import { create } from 'zustand';

export const ItemList = [
	{ pid: 1, contents: '테스트 상품1', price: 1000 },
	{ pid: 2, contents: '테스트 상품2', price: 2000 },
	{ pid: 3, contents: '테스트 상품3', price: 3000 },
	{ pid: 4, contents: '테스트 상품4', price: 4000 },
];
export const useCartStore = create(set => ({
	defaultCart: [
		// { cid: 0, pid: 1, contents: '테스트 상품1', price: 1000, amount: 2 },
		// { cid: 1, pid: 2, contents: '테스트 상품2', price: 2000, amount: 1 },
	],
	increaseCart(value) {
		// defaultCart에서 id를 찾아, 이미 중복되어있다면 amount 증가 : 아니면 defaultCart 새로운 항목 push
		set(state => {
			const existingItemIndex = state.defaultCart.findIndex(item => item.pid === value.pid);
			if (existingItemIndex !== -1) {
				const updatedCart = [...state.defaultCart];
				updatedCart[existingItemIndex].amount += 1;
				return {
					defaultCart: updatedCart,
				};
			} else {
				return {
					defaultCart: [...state.defaultCart, { ...value, amount: 1 }],
				};
			}
		});
	},
	decreaseCart(value) {
		set(state => {
			const updatedCart = [...state.defaultCart];
			const existingItemIndex = state.defaultCart.findIndex(item => item.cid === value.cid);
			if (updatedCart[existingItemIndex].amount > 1) {
				updatedCart[existingItemIndex].amount -= 1;
				return {
					defaultCart: updatedCart,
				};
			}
			if (updatedCart[existingItemIndex].amount === 1) {
				updatedCart.splice(existingItemIndex, 1);
				return {
					defaultCart: updatedCart,
				};
			}
		});
	},
}));
