import { createBrowserRouter } from 'react-router-dom';
import Idle from '../pages/Idle';
import Main from './../pages/Main';
import { styled } from 'styled-components';
const Layout = styled.div`
	margin: 0 auto;
	width: 500px;
	height: 100vh;
`;

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Idle />
			</Layout>
		),
	},
	{ path: 'main', element: <Main /> },
	{},
	{},
	{},
]);

export default router;
