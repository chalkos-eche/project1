import { styled } from 'styled-components';

export const BoxTitle = styled.article`
	& div {
		margin: 0.4rem 0;
	}
	h2 {
		color: #2d303e;
		font-family: Spoqa Han Sans Neo;
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 4.8rem;
		letter-spacing: -0.024rem;
	}
	h3 {
		color: #2d303e;
		font-family: Spoqa Han Sans Neo;
		font-size: 2.4rem;
		font-weight: 400;
		line-height: 2.4rem;
		letter-spacing: -0.024rem;
		& span {
			margin-left: 2rem;
			color: #2d303e;
			font-family: Spoqa Han Sans Neo;
			font-size: 1.6rem;
			font-weight: 300;
			line-height: 2.4rem;
			letter-spacing: -0.016rem;
		}
	}
	p {
		color: #424451;
		font-family: Spoqa Han Sans Neo;
		font-size: 1.4rem;
		font-weight: 300;
		line-height: 2.4rem;
		letter-spacing: -0.014rem;
	}
`;
