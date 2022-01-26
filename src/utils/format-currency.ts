import { CryptoCurrencies } from '@/types';

export function formatCurrency(currency: CryptoCurrencies) {
  return {
    ...currency,
    price: `${Number(currency.price).toFixed(2)} €`,
  };
}
