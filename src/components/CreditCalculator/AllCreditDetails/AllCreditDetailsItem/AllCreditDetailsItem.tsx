import { FC } from 'react';
import cn from 'classnames';
import s from './AllCreditDetailsItem.module.css';
import { CURRENCY } from 'helpers/constants/CreditData';

interface IAllCreditDetailsItem {
  id: number;
  datePayment: string;
  interestPayment: number;
  mainDebit: number;
  monthlyPayment: number;
  remainingDebt: number;
}

const AllCreditDetailsItem: FC<IAllCreditDetailsItem> = ({
  id,
  datePayment,
  interestPayment,
  remainingDebt,
  mainDebit,
  monthlyPayment,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{datePayment}</td>
      <td>{`${interestPayment} ${CURRENCY}`}</td>
      <td>{`${mainDebit} ${CURRENCY}`}</td>
      <td>{`${monthlyPayment} ${CURRENCY}`}</td>
      <td>{`${remainingDebt} ${CURRENCY}`}</td>
    </tr>
  );
};

export default AllCreditDetailsItem;
