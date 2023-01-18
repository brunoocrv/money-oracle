
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

export const ProtectedLayout = () => {
	const auth = useAuth();

	if (!auth.email) return <Navigate to="/login" replace />;

	return <Outlet />;
}