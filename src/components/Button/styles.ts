import styled from 'styled-components'

export const Wrapper = styled.button`
	width: 100%;
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;
  background: var(--green);
  color: var(--white);
  font-weight: bold;

	&:hover {
		opacity: 0.9;
	}
`