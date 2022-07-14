import { ChangeEvent, FC, memo, useCallback, useContext, useMemo } from 'react';
import { CreditPeriod } from 'helpers/constants/CreditData';
import {
  setCreditRate,
  setCreditSum,
  setCreditPeriod,
  StateContext,
} from 'state';
import { CustomInput, CustomSelector } from 'components';
// import cn from 'classnames';
import s from './DataEntry.module.css';
import { IStateReducer } from 'state/stateReducer';

const DataEntry: FC<IStateReducer> = ({
  currentPeriod,
  creditSum,
  creditRate,
}) => {
  const dispatch = useContext(StateContext);

  const handleChangeSum = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch && dispatch(setCreditSum(Number(e.target.value)));
    },
    [dispatch]
  );
  const handleChangeRate = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch && dispatch(setCreditRate(Number(e.target.value)));
    },
    [dispatch]
  );
  const handleChangePeriod = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch && dispatch(setCreditPeriod(e.target.value));
    },
    [dispatch]
  );

  const mapCreditPeriod = useMemo(() => {
    return Object.values(CreditPeriod);
  }, []);

  return (
    <div className={s.container}>
      <CustomInput
        label="Сумма кредита"
        onChange={handleChangeSum}
        value={creditSum}
      />
      <CustomSelector
        label="Срок кредита"
        value={currentPeriod.value}
        mapCreditPeriod={mapCreditPeriod}
        onChange={handleChangePeriod}
      />
      <CustomInput
        label="Ставка, %"
        onChange={handleChangeRate}
        value={creditRate}
      />
    </div>
  );
};

export default memo(DataEntry);
