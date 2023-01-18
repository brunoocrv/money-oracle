import { api } from ".";

export const handleLogin = async (email: string, password: string) => {
	try {
		const request = await api.post(
			`${process.env.REACT_APP_FAKE_API_URL}login`, 
			{ 
				email, 
				password 
			}
		);

		return request.data;
	} catch (error) {
		return null;
	}
}