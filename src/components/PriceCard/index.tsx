import { IPriceCard } from '../../shapes/priceCard'

import * as S from './styles'

export const PriceCard = (props: IPriceCard) => {
	return (
		<S.PriceButton>
				<span>{props.name}</span>
				<S.PricesContainer>
					{
						props.type === 'currency' && props.buy
							? <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.buy)}</span>
							: <span>Pts: {props.points}</span>
					}
					{
						props.variation > 0 
							? <S.Variation positive>{props.variation}%</S.Variation> 
							: <S.Variation>{props.variation}%</S.Variation>
					}
				</S.PricesContainer>
		</S.PriceButton>
	)
}