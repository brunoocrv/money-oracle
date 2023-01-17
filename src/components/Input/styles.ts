import styled from 'styled-components'

export const Container = styled.div`
	padding: 1rem 0;
`;

export const Label = styled.label`
	font-size: 1rem;
	color: var(--gray-dark);
	cursor: pointer;
`

export const InputWrapper = styled.div`
	display: flex;
	background: var(--gray-light);
	border-radius: 0.2rem;
	padding: 1rem 0.5rem;
	border: 0.2rem solid;
	border-color: var(--gray-light);

	&:focus-within {
		box-shadow: 0 0 0.5rem var(--primary);
	}
`

export const Input = styled.input`
	display: flex;
	width: 2.2rem;
	color: var(--primary);
	background: transparent;
	border: 0;
	outline: none;
	width: 100%;

	::placeholder {
		color: #D0D0D0;
	}
`