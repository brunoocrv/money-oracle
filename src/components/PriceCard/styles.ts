import styled from 'styled-components'

export const Container = styled.div`
	width: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	border-radius: 1rem;
	box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);

	> span {
		margin-bottom: 0.5rem;
		font-weight: bold;
		font-size: 1.5rem;
	}
`

export const PricesContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Variation = styled.span`
	background: var(--green);
	padding: 0 0.5rem;
	border-radius: 2rem;
`