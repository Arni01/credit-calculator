import { FC, memo } from 'react';
import cn from 'classnames';
import s from './CreditDescription.module.css';

interface ICreditDescription {
  isMiddle?: boolean;
  title: string;
  description: number;
}

const CreditDescription: FC<ICreditDescription> = ({
  isMiddle = false,
  title,
  description,
}) => {
  return (
    <div className={cn(s.container, isMiddle && s.mainDescription)}>
      <p className={s.title}>{title}</p>
      <p className={s.description}>{description.toFixed(2)}</p>
    </div>
  );
};

export default memo(CreditDescription);
