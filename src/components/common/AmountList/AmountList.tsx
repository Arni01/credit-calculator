import { CURRENCY } from 'helpers/constants/CreditData';
import { FC, memo } from 'react';
import s from './AmountList.module.css';

interface IAmountList {
  amount: number | string;
  customClassName?: string;
}

const AmountList: FC<IAmountList> = ({ amount, customClassName }) => {
  const arrayAmount = amount.toString().split('.');

  return (
    <p className={customClassName}>
      {arrayAmount[0]}.<span className={s.span}>{arrayAmount[1]}</span>{' '}
      {CURRENCY}
    </p>
  );
};

export default memo(AmountList);
