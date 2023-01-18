import { createContext, useContext, useState, useEffect } from "react";
import { handleLogin } from "../services/fakeApiService";

interface IAuth {
	email?: string;
	token?: string;
}

interface IAuthContext extends IAuth {
	authenticate: (email: string, password: string) => Promise<void>;
	logout: () => void;
}

interface IAuthProvider {
	children: JSX.Element;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => {
	const context = useContext(AuthContext);

	return context;
}

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [user, setUser] = useState<IAuth | null>();

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
		};
	}, []);

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