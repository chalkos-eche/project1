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
		<div className="App">
			<Link to="/main">
				<Idle />
			</Link>
		</div>
	);
}

export default App;
