import { IPriceCard } from '../../interfaces/priceCard'

import * as S from './styles'

export function PriceCard(props: IPriceCard) {
	return (
		<button>
			<S.Container>
				<span>{props.currency.name}</span>
				<S.PricesContainer>
					<span>{props.currency.buy}</span>
					<S.Variation>{props.currency.variation}%</S.Variation>
				</S.PricesContainer>
			</S.Container>
		</button>
	)
}