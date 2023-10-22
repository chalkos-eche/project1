import { styled } from 'styled-components';

export const Main = styled.main`
	display: flex;
	flex: 1;
	overflow: hidden;
	flex-direction: column;
	justify-content: stretch;
	height: 100%;
	background: #fff;
	border-radius: 20px 20px 0px 0px;
`;
export const ItemContainer = styled.div`
	display: flex;
	position: relative;
	align-items: flex-end;
	margin-top: 1.2rem;
	margin-bottom: 2rem;
`;

export const MainPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
	height: 100%;
	padding: 0 2rem;
`;
