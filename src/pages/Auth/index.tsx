import * as S from './styles';
import logo from '../../assets/icons/money-oracle.svg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
	const auth = useAuth();
	const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;

		// {
		// 	"email": "eve.holt@reqres.in",
		// 	"password": "cityslicka"
		// }

		try {
			await auth.authenticate(email, password);
			navigate('/home');
		} catch (error) {
			return alert('Check your credentials');
		}
	};

	return (
		<S.Container>
			<S.Header>
				<img src={logo} alt="Money Oracle Logo"/>
				<span>Money Oracle</span>
			</S.Header>
			<S.FormContainer>
				<form onSubmit={handleSubmit}>
					<Input
						type="email"
						id="email"
						placeholder="Insert your e-mail"
						required
					/>
					<Input
						type="password"
						id="password"
						placeholder="Insert your password"
						required
					/>
					<Button type="submit">Login</Button>
				</form>
			</S.FormContainer>
		</S.Container>
	)
}