import './styles/global.css'

import {Router } from './routes/router';
import { AuthProvider } from './contexts/auth'


const App = () => {
  return (
		<AuthProvider>
			<Router />
		</AuthProvider>
	)
}

export default App;
