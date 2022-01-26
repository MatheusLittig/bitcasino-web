import { fetchCryptoCurrency } from '@/services';
import { CryptoCurrencies } from '@/types';
import { formatCurrency } from '@/utils';
import { useEffect, useState } from 'react';

export const useCryptoPrices = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState<CryptoCurrencies[]>(
    [],
  );

  const [isLoading, setIsLoading] = useState(false);

  const intialCryptoCurrencies: CryptoCurrencies[] = [
    {
      symbol: 'BTC',
      price: '',
    },
    {
      symbol: 'ETH',
      price: '',
    },
    {
      symbol: 'LTC',
      price: '',
    },
  ];

  useEffect(() => {
    if (cryptoCurrencies.length === 0) {
      intialCryptoCurrencies.forEach(async cryptoCurrency => {
        const fetchedData = await fetchCryptoCurrency(cryptoCurrency.symbol);
        return setCryptoCurrencies(prevState => [
          ...prevState,
          formatCurrency(fetchedData),
        ]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onAddCryptoCurrency(cryptoCurrency: string) {
    if (
      !cryptoCurrencies.find(
        currency => currency.symbol === cryptoCurrency.toUpperCase(),
      )
    ) {
      setIsLoading(true);
      try {
        const fetchedData = await fetchCryptoCurrency(cryptoCurrency);

        setCryptoCurrencies(prevState => [
          ...prevState,
          formatCurrency(fetchedData),
        ]);

        return setIsLoading(false);
      } catch (err) {
        alert('Invalid crypto currency');
        return setIsLoading(false);
      }
    } else {
      return alert('Crypto currency already added');
    }
  }

  async function onDeleteCryptoCurrency(cryptoCurrency: string) {
    const filteredCryptoCurrencies = cryptoCurrencies.filter(
      cryptoCurrencyItem => cryptoCurrencyItem.symbol !== cryptoCurrency,
    );

    return setCryptoCurrencies(filteredCryptoCurrencies);
  }

  return {
    cryptoCurrencies,
    isLoading,
    onAddCryptoCurrency,
    onDeleteCryptoCurrency,
  };
};
