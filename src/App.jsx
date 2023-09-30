import { styled } from 'styled-components';
import './App.css';
import Idle from './pages/Idle';

const Layout = styled.div`
	margin: 0 auto;
	width: 500px;
	height: 100vh;
`;
function App() {
	return (
		<div className="App">
			<Layout>
				<Idle />
			</Layout>
		</div>
	);
}

export default App;
