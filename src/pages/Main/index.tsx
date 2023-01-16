import * as S from './styles';

import { PriceCard } from "../../components/PriceCard";

export function Main() {
	const mock = {
		source: "BRL",
		currency: {
			name: "Dollar",
			buy: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(5.1519),
			variation: 0.974
		},
	}

	return (
		<S.Container>
			<PriceCard
				source='BRL'
				currency={mock.currency}
			/>
		</S.Container>
	)
}