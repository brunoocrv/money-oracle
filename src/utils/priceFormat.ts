export function priceFormat(item: any) {
	const source = !!item.source ? item.source : '';

	const data = Object.values(item);
	data.shift();

	return { source, prices: data };
}