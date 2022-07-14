import { FC, useCallback, useMemo, useReducer, useState } from 'react';
import { CreditPeriod } from '../../helpers/constants/CreditData';
import { StateContext, stateReducer } from '../../state';
import { DataEntry, CalculationCreditInfo, AllCreditDetails } from 'components';
import s from './CreditCalculator.module.css';
import {
  getCalcutionCreditInfo,
  getLastMonthlyPayment,
} from 'helpers/creditMetods/creditMetods';

interface ICreditCalculator {
  creditRate: number;
}

const CreditCalculator: FC<ICreditCalculator> = ({ creditRate }) => {
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [state, dispatch] = useReducer(stateReducer, {
    currentPeriod: CreditPeriod[12],
    creditSum: 10_000,
    creditRate,
  });

  const handleTogleDetails = useCallback(() => {
    isOpenDetails ? setIsOpenDetails(false) : setIsOpenDetails(true);
  }, [isOpenDetails]);

  const { percentage, ...calculationCreditInfo } = useMemo(
    () => getCalcutionCreditInfo(state),
    [state]
  );

  const lastMonthlyPayment = getLastMonthlyPayment(
    calculationCreditInfo.monthlyPayment,
    calculationCreditInfo.totalAmount,
    state.currentPeriod
  );

  return (
    <StateContext.Provider value={dispatch}>
      <div className={s.container}>
        <DataEntry {...state} />
        <CalculationCreditInfo
          {...calculationCreditInfo}
          isOpenDetails={isOpenDetails}
          toogleDetails={handleTogleDetails}
        />
        <AllCreditDetails
          creditSum={state.creditSum}
          currentPeriod={state.currentPeriod}
          monthlyPayment={Number(
            calculationCreditInfo.monthlyPayment.toFixed(2)
          )}
          lastMonthlyPayment={lastMonthlyPayment}
          percentage={percentage}
        />
      </div>
    </StateContext.Provider>
  );
};

export default CreditCalculator;
