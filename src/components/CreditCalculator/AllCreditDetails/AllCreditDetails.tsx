import { FC, memo } from 'react';
import s from './AllCreditDetails.module.css';
import { getAllCreditDatails } from 'helpers/creditMetods/creditMetods';
import { TCreditPeriodItem } from 'helpers/constants/CreditData';
import AllCreditDetailsItem from './AllCreditDetailsItem/AllCreditDetailsItem';

interface IAllCreditDetails {
  creditSum: number;
  monthlyPayment: number;
  lastMonthlyPayment: number;
  currentPeriod: TCreditPeriodItem;
  percentage: number;
}

const AllCreditDetails: FC<IAllCreditDetails> = ({
  creditSum,
  monthlyPayment,
  lastMonthlyPayment,
  currentPeriod,
  percentage,
}) => {
  const creditDetails = getAllCreditDatails({
    sum: creditSum,
    monthlyPayment,
    lastMonthlyPayment,
    currentPeriod: currentPeriod.value,
    percentage,
  });

  return (
    <table className={s.table}>
      <caption className={s.caption}>Расчет по месяцам</caption>
      <thead>
        <tr>
          <th>№</th>
          <th>Дата платежа</th>
          <th>Платеж по процентам</th>
          <th>Платеж по основному долгу</th>
          <th>Общая сумма платежа</th>
          <th>Остаток</th>
        </tr>
      </thead>
      <tbody>
        {creditDetails.map((item) => (
          <AllCreditDetailsItem key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default memo(AllCreditDetails);
