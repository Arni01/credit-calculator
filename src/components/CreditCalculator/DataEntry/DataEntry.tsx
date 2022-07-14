import { ChangeEvent, FC, useCallback, useContext } from 'react';
import { TCreditPeriodItem } from '../../../helpers/constants/CreditData';
import { setCreditSum, StateContext } from '../../../state';
// import cn from 'classnames';
// import s from './DataEntry.module.css';

interface IDataEntry {
  creditRate: number;
  creditSum: number;
  currentPeriod: TCreditPeriodItem;
}

const DataEntry: FC<IDataEntry> = ({
  currentPeriod,
  creditSum,
  creditRate,
}) => {
  const dispatch = useContext(StateContext);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch && dispatch(setCreditSum(Number(e.target.value)));
    },
    [dispatch]
  );

  return (
    <div>
      <label>
        <p>Сумма кредита</p>
        <input value={creditSum} onChange={handleChange} />
      </label>
    </div>
  );
};

export default DataEntry;
