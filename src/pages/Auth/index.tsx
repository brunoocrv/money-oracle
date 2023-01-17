import * as S from './styles';
import logo from '../../assets/icons/money-oracle.svg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const Auth = () => {

  const handleSubmit = (event: any) => {
		event.preventDefault();

		const email = event.target.email.value;
		const password = event.target.password.value;

		console.log(email, password);
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