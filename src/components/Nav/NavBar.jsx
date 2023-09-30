import React from 'react';
import * as S from './NavBar.styled';

const NavBar = () => {
	return (
		<S.Nav>
			<ul>
				<li>이달의 꽃</li>
				<li>프리미엄</li>
				<li>꽃다발</li>
				<li>꽃바구니</li>
				<li>꽃상자</li>
				<li>디저트</li>
			</ul>
		</S.Nav>
	);
};

export default NavBar;
