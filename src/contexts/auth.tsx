import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { handleLogin } from "../services/fakeApiService";
import { IAuth, IAuthContext } from "../shapes/authProps";


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => {
	const context = useContext(AuthContext);

	return context;
}

export const AuthProvider = ({ children }: { children?: ReactNode }) => {
	const [user, setUser] = useState<IAuth | null>();
	const navigate = useNavigate();

	const authenticate = async (email: string, password: string) => {
		const response = await handleLogin(email, password);

		const payload = { token: response.token, email };
	
		setUser(payload);
		setUserLocalStorage(payload);
	}

	useEffect(() => {
		const checkUser = getUserLocalStorage();

		if (checkUser) {
			setUser(checkUser);
			navigate('/');
		};
	}, [navigate]);

	const logout = () => {
		setUser(null);
		localStorage.clear();
	}

	return (
		<AuthContext.Provider value={{
			...user,
			authenticate,
			logout
		}}>
			{children}
		</AuthContext.Provider>
	)
}

const setUserLocalStorage = (user: IAuth | null) => {
	localStorage.setItem('user', JSON.stringify(user))
}

const getUserLocalStorage = () => {
	const json = localStorage.getItem('user');

	if (!json) return null;

	return JSON.parse(json) ?? null;
}