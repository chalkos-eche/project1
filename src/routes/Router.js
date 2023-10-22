import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainPageTest from '../pages/main/MainPageTest';
import OrderPage from '../pages/order/OrderPage';
import PaymentCardPage from '../pages/payment/PaymentCardPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{ path: 'main', element: <MainPageTest /> },
	{ path: 'order', element: <OrderPage /> },
	{ path: 'payment', element: <PaymentCardPage /> },
	{},
	{},
]);

export default router;
