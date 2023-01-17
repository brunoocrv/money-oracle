import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 8rem;
		height: 8rem;
		margin-right: 1rem;
	}

	span {
		font-size: 2rem;
	}
`

export const FormContainer = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	form {
		width: 100%;
	}
 
	@media (max-width: 1000px) {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		form {
			width: 100%;
		}
	}

	@media (max-width: 700px) {
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		form {
			width: 100%;
		}
	}
`