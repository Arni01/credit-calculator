import { FC, useReducer } from 'react';
import { CreditPeriod } from '../../helpers/constants/CreditData';
import { StateContext, stateReducer } from '../../state';
import DataEntry from './DataEntry/DataEntry';
// import s from './CreditCalculator.module.css';

interface ICreditCalculator {
  creditRate: number;
}

const CreditCalculator: FC<ICreditCalculator> = ({ creditRate }) => {
  const [state, dispatch] = useReducer(stateReducer, {
    currentPeriod: CreditPeriod[12],
    creditSum: 10_000,
    creditRate,
  });

  console.log(state);

  return (
    <StateContext.Provider value={dispatch}>
      <div>
        <DataEntry {...state} />
      </div>
    </StateContext.Provider>
  );
};

export default CreditCalculator;
