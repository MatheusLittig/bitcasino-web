import { fetchCryptoCurrency } from '@/services';
import { CryptoCurrencies } from '@/types';
import { formatCurrency } from '@/utils';
import { useEffect, useState } from 'react';

export const useCryptoPrices = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState<CryptoCurrencies[]>(
    [],
  );

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
    intialCryptoCurrencies.forEach(async cryptoCurrency => {
      const fetchedData = await fetchCryptoCurrency(cryptoCurrency.symbol);
      return setCryptoCurrencies(prevState => [
        ...prevState,
        formatCurrency(fetchedData),
      ]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onAddCryptoCurrency(cryptoCurrency: string) {
    try {
      const fetchedData = await fetchCryptoCurrency(cryptoCurrency);

      return setCryptoCurrencies(prevState => [
        ...prevState,
        formatCurrency(fetchedData),
      ]);
    } catch (err) {
      return alert('Invalid crypto currency');
    }
  }

  async function onDeleteCryptoCurrency(cryptoCurrency: string) {
    const filteredCryptoCurrencies = cryptoCurrencies.filter(
      cryptoCurrencyItem => cryptoCurrencyItem.symbol !== cryptoCurrency,
    );

    return setCryptoCurrencies(filteredCryptoCurrencies);
  }

  return { cryptoCurrencies, onAddCryptoCurrency, onDeleteCryptoCurrency };
};
