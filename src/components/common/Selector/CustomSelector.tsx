import { TCreditPeriodItem } from 'helpers/constants/CreditData';
import { FC, memo, SelectHTMLAttributes } from 'react';
// import cn from 'classnames';
// import s from './CustomSelector.module.css';

interface ICustomSelector extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  mapCreditPeriod: TCreditPeriodItem[];
}

const CustomSelector: FC<ICustomSelector> = ({
  label,
  mapCreditPeriod,
  ...props
}) => {
  return (
    <label>
      <p> {label}</p>
      <select {...props}>
        {mapCreditPeriod.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default memo(CustomSelector);
