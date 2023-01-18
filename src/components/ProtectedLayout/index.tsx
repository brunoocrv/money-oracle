import { useAuth } from "../../contexts/auth";
import { useNavigate } from 'react-router-dom';

export const ProtectedLayout = ({ children }: any) => {
	const auth = useAuth();
	const navigate = useNavigate();

	if (!auth.email) {
		return navigate("/");
	}

	return children;
}