import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/auth';

import * as S from './styles';

import { getPrices } from '../../services/priceService';
import { IPriceProps } from '../../shapes/priceProps';

import { PriceCard } from "../../components/PriceCard";
import { Divider } from '../../components/Divider';

export const Main = () => {
	const [currencies, setCurrencies] = useState<IPriceProps>();
	const [stocks, setStocks] = useState<IPriceProps>();
	const auth = useAuth();

	useEffect(() => {
		const setData = async () => {
			const { newCurrencies, newStocks }: any = await getPrices();

			setCurrencies(newCurrencies);
			setStocks(newStocks);
		}

		setData();
	}, []);

	return (
		<S.Container>
		<h1>Currencies</h1>
		<button onClick={auth.logout}>Sair</button>
		<Divider />
		<S.Section>
			{
				currencies ? currencies.prices.map((item: any) => {
					return <PriceCard
						key={item.name}
						type="currency"
						name={item.name}
						buy={item.buy}
						variation={item.variation}
					/>
				}) : <span>Nothing to show!!</span>
			}
		</S.Section>
		<h1>Stocks</h1>
		<Divider />
		<S.Section>
		{
				stocks ? stocks.prices.map((item: any) => {
					return <PriceCard
						key={item.name}
						type="stock"
						name={item.name}
						points={item.points}
						variation={item.variation}
					/>
				}) : <span>Nothing to show!!</span>
			}
		</S.Section>
		</S.Container>
	);
}