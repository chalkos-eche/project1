import React from 'react';
import Banner from '../../components/Banner/Banner';
import Layout from './../../components/Layout/Layout';
import NavBar from './../../components/Nav/NavBar';
import * as S from './MainPage.styled';
import ItemBox from './../../components/ItemBox/ItemBox';
import Logo from '../../components/Logo/Logo';
import Footer from './../../components/Footer/Footer';
import CartBox from './../../components/Cart/CartBox';

const MainPage = () => {
	return (
		<Layout>
			<S.MainPageContainer>
				<header>
					<Logo />
					<Banner />
				</header>
				<S.Main>
					<S.ItemContainer>
						<ItemBox />
						<NavBar />
					</S.ItemContainer>
					<CartBox />
				</S.Main>
				<Footer />
			</S.MainPageContainer>
		</Layout>
	);
};

export default MainPage;
