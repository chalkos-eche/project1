import React from 'react';
import Banner from '../../components/Banner/Banner';
import Layout from './../../components/Layout/Layout';
import NavBar from './../../components/Nav/NavBar';

import * as S from './MainPage.styled';
import ItemBox from './../../components/ItemBox/ItemBox';
import Logo from '../../components/Logo/Logo';
const MainPage = () => {
	return (
		<Layout>
			<header>
				<Logo />
				<Banner />
			</header>
			<S.Main>
				<ItemBox />
				<NavBar />
			</S.Main>
			<footer>
				<p>취소</p>
				<p>주문하기</p>
			</footer>
		</Layout>
	);
};

export default MainPage;
