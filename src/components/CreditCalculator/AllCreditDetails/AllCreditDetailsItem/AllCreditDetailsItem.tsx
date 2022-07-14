import { FC } from 'react';
import cn from 'classnames';
import s from './AllCreditDetailsItem.module.css';

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
      <td>{interestPayment}</td>
      <td>{mainDebit}</td>
      <td>{monthlyPayment}</td>
      <td>{remainingDebt}</td>
    </tr>
  );
};

export default AllCreditDetailsItem;
