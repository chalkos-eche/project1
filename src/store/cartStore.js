import { create } from 'zustand';

export const cartStore = create(set => ({
	initialValue: [],
	addItem: item => {
		set(prev => {
			return [...prev.initialValue, { ...item, amount: 1 }];
		});
	},
	increaseAmount: item => {
		set(prev => {
			const findItemIndex = prev.initialValue.findIndex(i => i.pid === item.pid);
			// 아이템 없을경우 추가하기
			const hasItem = findItemIndex !== -1;
			if (!hasItem) {
				return prev.addItem(item);
			}
			// 불변성 이유로 updatedCart만들어주기
			const updatedCart = [...prev.initialValue];
			updatedCart[findItemIndex].amount += 1;
			// 다시 초기값에  반환하기
			return {
				initialValue: updatedCart,
			};
		});
	},
	removeItem(item) {},
	decreaseAmount(item) {},
}));
