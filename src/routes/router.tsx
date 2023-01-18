import { Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from '../components/ProtectedLayout';

import { Auth } from '../pages/Auth';
import { Main } from '../pages/Main';

export const Router = () => {
	return (
		<Routes>
			<Route path="/login" element={<Auth />} />
			<Route
				element={<ProtectedLayout />}
			>
				<Route path='/' element={<Main />} />
			</Route>
		</Routes>
	)
}