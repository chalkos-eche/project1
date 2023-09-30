import { styled } from 'styled-components';
import Idle from './pages/Idle';
import { Link } from 'react-router-dom';
const Layout = styled.div`
	margin: 0 auto;
	width: 500px;
	height: 100vh;
`;

function App() {
	return (
		<Layout>
			<Link to="/main">
				<Idle />
			</Link>
		</Layout>
	);
}

export default App;
