import { priceFormat } from "../../utils/priceFormat";
import { api } from "../axios";

export const getPrices = async () => {
	try {
		const request = await api.get(`${process.env.REACT_APP_BASE_URL}`);

		const { currencies, stocks } = request.data.results;

		const newCurrencies = priceFormat(currencies);
		const newStocks = priceFormat(stocks);
	
		return { newCurrencies, newStocks };
	} catch (error) {
		return error;
	}
}