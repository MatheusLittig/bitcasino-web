import { apollo } from '@/apis';
import { gql } from '@apollo/client';

type FetchedCryptoCurrencies = {
  marketSymbol: string;
  ticker: { lastPrice: string };
};

export async function fetchCryptoCurrency(cyrpto: string) {
  const { data } = await apollo.query({
    query: gql`query price {
        markets(filter:{ baseSymbol: {_eq:"${cyrpto.toUpperCase()}"} quoteSymbol: {_eq:"EUR"}}) {
          marketSymbol
          ticker {
            lastPrice
          }
        }
      }`,
  });

  console.log(data);

  const { marketSymbol, ticker }: FetchedCryptoCurrencies = data.markets[0];

  return {
    symbol: marketSymbol.match(`${cyrpto.toUpperCase()}`)[0],
    price: ticker.lastPrice,
  };
}
