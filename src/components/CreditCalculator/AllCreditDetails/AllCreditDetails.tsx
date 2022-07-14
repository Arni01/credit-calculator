import { FC, memo } from 'react';
import cn from 'classnames';
import s from './AllCreditDetails.module.css';
import { getAllCreditDatails } from 'helpers/creditMetods/creditMetods';
import { TCreditPeriodItem } from 'helpers/constants/CreditData';

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
    <div>
      {creditDetails.map((item) => (
        <div key={item.id} style={{ display: 'flex', gap: 20 }}>
          <p>{item.id}</p>
          <p>{item.datePayment}</p>
          <p>{item.interestPayment}</p>
          <p>{item.monthlyPayment}</p>
          <p>{item.mainDebit}</p>
          <p>{item.remainingDebt}</p>
        </div>
      ))}
    </div>
  );
};

export default memo(AllCreditDetails);
