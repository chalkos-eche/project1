import React from 'react';
import * as S from './Item.styled';
import item1 from '../../../assets/images/Item1.png';
const Item = () => {
	return (
		<S.ItemContainer>
			<img src={item1} alt="item" />
			<h3>
				분홍 꽃밭
				<span>(서울 한정)</span>
			</h3>
			<p>5,500 원</p>
		</S.ItemContainer>
	);
};

export default Item;
