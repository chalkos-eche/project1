import React from 'react';
import Banner from '../../components/Banner/Banner';
import Layout from './../../components/Layout/Layout';
import NavBar from './../../components/Nav/NavBar';

import * as S from './MainPage.styled';
const MainPage = () => {
	return (
		<Layout>
			<header>
				<h1>Logos</h1>
				<Banner />
			</header>
			<S.Main>
				<NavBar />
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
