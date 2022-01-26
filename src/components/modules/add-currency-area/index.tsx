import { Button, Input } from '@/components/elements';
import { useState } from 'react';
import * as S from './styles';

interface AddCurrencyAreaProps {
  onAddCurrency: (currency: string) => void;
}

export const AddCurrencyArea = ({ onAddCurrency }: AddCurrencyAreaProps) => {
  const [currency, setCurrency] = useState('');
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
          Add
        </Button>
      </S.FormArea>

      <p>
        Use of this service is subject to terms and <br /> conditions
      </p>
    </S.Wrapper>
  );
};
