import { Button, Input, Spinner } from '@/components/elements';
import { useState } from 'react';
import * as S from './styles';

interface AddCurrencyAreaProps {
  onAddCurrency: (currency: string) => void;
  isLoading: boolean;
}

export const AddCurrencyArea = ({
  onAddCurrency,
  isLoading,
}: AddCurrencyAreaProps) => {
  const [currency, setCurrency] = useState('');
  console.log(isLoading);
  return (
    <S.Wrapper>
      <S.FormArea>
        <Input
          placeholder="Enter with crypto code..."
          id="currency-input"
          onChange={event => {
            return setCurrency(event.target.value);
          }}
        />
        <Button
          onClick={() => {
            onAddCurrency(currency);
            const input = document.getElementById(
              'currency-input',
            ) as HTMLInputElement;

            return (input.value = '');
          }}
        >
          {isLoading ? <Spinner /> : 'Add'}
        </Button>
      </S.FormArea>

      <p>
        Use of this service is subject to terms and <br /> conditions
      </p>
    </S.Wrapper>
  );
};
