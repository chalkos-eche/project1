import { styled } from 'styled-components';

export const Nav = styled.nav`
	margin: 0 2rem;
	/* flex: 1 1 0; */
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	width: fit-content;
	min-height: 20.4rem;
	border-radius: 2rem;
	background-color: #f0f0f0;
	text-align: center;
	height: 36rem;
	& ul li {
		width: 10rem;
		height: 4.4rem;
		line-height: 4.4rem;
	}
`;
