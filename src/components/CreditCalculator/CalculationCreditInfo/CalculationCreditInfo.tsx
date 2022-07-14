import { CreditDescription } from 'components';
import { IGetCalculationCreditInfo } from 'helpers/creditMetods/creditMetods';
import { FC } from 'react';
// import cn from 'classnames';
import s from './CalculationCreditInfo.module.css';

interface ICalculationCreditInfo
  extends Omit<IGetCalculationCreditInfo, 'percentage'> {
  isOpenDetails: boolean;
  toogleDetails: () => void;
}

const CalculationCreditInfo: FC<ICalculationCreditInfo> = ({
  monthlyPayment,
  totalAmount,
  totalOverPayment,
  toogleDetails,
  isOpenDetails,
}) => {
  return (
    <div>
      <h2>Расчет кредита</h2>
      <div className={s.containerDescription}>
        <CreditDescription
          description={monthlyPayment}
          title="Ежемесячный платеж"
          isMiddle
        />
        <CreditDescription
          description={totalAmount}
          title="Общая сумма платежа"
        />
        <CreditDescription
          description={totalOverPayment}
          title="Общая сумма переплаты"
        />
      </div>
      <button onClick={toogleDetails} className={s.btn}>
        {isOpenDetails ? 'Скрыть детали расчета' : 'Показать детали расчета'}
      </button>
    </div>
  );
};

export default CalculationCreditInfo;
