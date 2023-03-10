import { LogOutOutline } from '@styled-icons/evaicons-outline/LogOutOutline'
import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 1rem;
`

export const Section = styled.div`
	width: 85%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	border-radius: 1rem;
	padding: 1rem;
	box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
`

export const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;

	@media (max-width: 650px) {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 5rem;
	}
`

export const HeaderLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	> img {
		width: 8rem;
		height: 8rem;
		margin-right: 1rem;
	}

	span {
		font-size: 1rem;
	}
`

export const Logout = styled(LogOutOutline)`
	width: 2rem;
	height: 2rem;
	color: var(--red);

	:hover {
		opacity: 0.5;
	}
`