export interface IPriceProps {
	source: string;
	prices: [
		{
			name: string;
			buy: number;
			sell: number;
			variation: number;
		}
	]
}