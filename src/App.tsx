import './styles/global.css'

import { Router as Routes } from './routes/router';
import { AuthProvider } from './contexts/auth'
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
		<BrowserRouter>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App;
