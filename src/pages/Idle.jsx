import React from 'react';
import { styled } from 'styled-components';
import idleImage1 from '../assets/images/idle-image1.jpg';
import idleImage2 from '../assets/images/idle-image2.jpg';
import idleImage3 from '../assets/images/idle-image3.jpg';
import idleImage4 from '../assets/images/idle-image4.jpg';
import idleImage5 from '../assets/images/idle-image5.jpg';

// 대기화면 랜덤이미지 적용
const ImgArray = [
	{ src: idleImage1 },
	{ src: idleImage2 },
	{ src: idleImage3 },
	{ src: idleImage4 },
	{ src: idleImage5 },
];
const randomIndex = Math.floor(Math.random() * ImgArray.length);

const backgroundRandomimg = ImgArray[randomIndex].src;

const Wrapper = styled.div`
	background-image: url('/src/assets/images/idle-image.jpg');
	background-image: url(${backgroundRandomimg});
	background-size: auto 100%;
	background-repeat: no-repeat;
	background-position: center;
	min-width: 50rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
`;
const Idle = () => {
	return (
		<Wrapper>
			<h1>Flower Shop</h1>
			<h2>꽃,가게</h2>
			<p>스크린을 터치해주세요.</p>
			{/* <img src={idleImage} alt="test" /> */}
		</Wrapper>
	);
};

export default Idle;
