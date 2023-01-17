export interface IPriceCard {
	type: 'currency' | 'stock';
	source?: string;
	name: string;
	buy?: number;
	points?: number;
	sell?: number;
	variation: number;
}