const url = 'https://api.blocktap.io/graphql';

type FetchedCryptoCurrencies = {
  marketSymbol: string;
  ticker: { lastPrice: string };
};

export async function fetchCryptoCurrency(cyrpto: string) {
  const { data } = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query price {
        markets(filter:{ baseSymbol: {_eq:"${cyrpto.toUpperCase()}"} quoteSymbol: {_eq:"EUR"}}) {
          marketSymbol
          ticker {
            lastPrice
          }
        }
      }`,
      variables: {
        now: new Date().toISOString(),
      },
    }),
  }).then(res => res.json());

  const { marketSymbol, ticker }: FetchedCryptoCurrencies = data.markets[0];

  return {
    symbol: marketSymbol.match(`${cyrpto.toUpperCase()}`)[0],
    price: ticker.lastPrice,
  };
}
