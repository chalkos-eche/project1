import React from 'react';
import Idle from '../../components/Idle';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
const IdlePage = () => {
	return (
		<Layout>
			<Link to="/main">
				<Idle />
			</Link>
		</Layout>
	);
};

export default IdlePage;
