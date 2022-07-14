import { FC, InputHTMLAttributes, memo } from 'react';
// import cn from 'classnames';
import s from './CustomInput.module.css';

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomInput: FC<ICustomInput> = ({ label, ...props }) => {
  return (
    <label>
      <p>{label}</p>
      <input {...props} className={s.input} />
    </label>
  );
};

export default memo(CustomInput);
