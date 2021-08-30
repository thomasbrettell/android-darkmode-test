import { useState } from 'react';
import styles from './StyledCheckboxFour.module.css'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const StyledCheckboxFour = () => {
  const [checked, setCheck] = useState(false)

  const className = cx({
    StyledCheckboxFour: true,
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

export default StyledCheckboxFour;
