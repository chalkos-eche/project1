import { Link } from 'react-router-dom';
import IdlePage from './pages/idle/IdlePage';

function App() {
	return (
		<Link to="/main">
			<IdlePage />
		</Link>
	);
}

export default App;
