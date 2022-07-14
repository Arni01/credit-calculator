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
      const inputValue = Number(e.target.value.replace(/[^\d]+/gi, ''));
      dispatch && dispatch(setCreditSum(inputValue));
    },
    [dispatch]
  );
  const handleChangeRate = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = Number(e.target.value.replace(/[^\d]+/gi, ''));
      dispatch && dispatch(setCreditRate(inputValue));
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
    <div>
      <h3>Данный по кредиту</h3>

      <div className={s.container}>
        <CustomInput
          label="Сумма кредита"
          onChange={handleChangeSum}
          value={creditSum}
          inputMode="numeric"
          placeholder="Введите сумму кредита"
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
          inputMode="numeric"
          placeholder="Введите процент ставки"
        />
      </div>
    </div>
  );
};

export default memo(DataEntry);
