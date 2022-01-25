import { Button, Input } from '@/components/elements';
import * as S from './styles';

export const AddCurrencyArea = () => {
  return (
    <S.Wrapper>
      <S.FormArea>
        <Input placeholder="Enter with crypto code..." />
        <Button>Add</Button>
      </S.FormArea>

      <p>
        Use of this service is subject to terms and <br /> conditions
      </p>
    </S.Wrapper>
  );
};
