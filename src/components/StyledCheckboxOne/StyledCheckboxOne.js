import { useState } from 'react';
import styles from './StyledCheckboxOne.module.css'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const StyledCheckboxOne = () => {
  const [checked, setCheck] = useState(false)

  const className = cx({
    StyledCheckboxOne: true,
    checked: checked,
  });

  const checkHandler = (e) => {
    setCheck(!checked)
  }

  return (
    <label className={className}>
      <input type="checkbox" onChange={checkHandler} value='Checkbox'></input>
      <span>Checkbox</span>
    </label>
  );
};

export default StyledCheckboxOne;
