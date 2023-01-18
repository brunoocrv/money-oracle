export interface IAuth {
	email?: string;
}

export interface IAuthContext extends IAuth {
	authenticate: (email: string) => Promise<void>;
	logout: () => void;
}

export interface IAuthProvider {
	children: JSX.Element;
}