import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/main/MainPage';
import OrderPage from '../pages/order/OrderPage';
import PaymentCardPage from '../pages/payment/PaymentCardPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{ path: 'main', element: <MainPage /> },
	{ path: 'order', element: <OrderPage /> },
	{ path: 'payment', element: <PaymentCardPage /> },
	{},
	{},
]);

export default router;
