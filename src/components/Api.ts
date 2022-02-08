type TResponseExchange = { quotes: { [K: string]: number } };

export const Api = {
	get: () =>
		fetch("http://api.currencylayer.com/live?access_key=9ae101ac288f5d7ff8708572065e06eb")
			.then((response) => {
				if (!response.ok) return Promise.reject(response.statusText);
				return response.json();
			})
			.catch(Promise.reject) as Promise<TResponseExchange>,
};
