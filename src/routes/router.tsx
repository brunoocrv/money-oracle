import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from '../components/ProtectedLayout';

import { Auth } from '../pages/Auth';
import { Main } from '../pages/Main';

export const Router = () => {
	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Auth />} />
			<Route 
				path="/home"
				element={
					<ProtectedLayout>
						<Main />
					</ProtectedLayout>
				}
			/>
		</Routes>
	</BrowserRouter>
	)
}