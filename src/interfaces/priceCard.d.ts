export interface IPriceCard {
	source: string;
	currency: {
		name: string;
		buy: string;
		variation: number;
	},
}