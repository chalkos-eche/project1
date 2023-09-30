import { createBrowserRouter } from 'react-router-dom';
import Idle from '../pages/Idle';
import Main from './../pages/Main';
import App from '../App';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{ path: 'main', element: <Main /> },
	{},
	{},
	{},
]);

export default router;
