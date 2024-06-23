type TResponseExchange = { quotes: { [K: string]: number } };

export const Api = {
	get: async (): Promise<TResponseExchange> => {
		try {
			const response = await fetch(
				"http://api.currencylayer.com/live?access_key=9ae101ac288f5d7ff8708572065e06eb"
			);
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			return data as TResponseExchange;
		} catch (error) {
			return Promise.reject(error);
		}
	},
};
