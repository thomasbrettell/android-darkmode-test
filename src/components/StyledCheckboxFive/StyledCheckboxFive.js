import { useState } from 'react';
import styles from './StyledCheckboxFive.module.css'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const StyledCheckboxFive = () => {
  const [checked, setCheck] = useState(false)

  const className = cx({
    StyledCheckboxFive: true,
    checked: checked,
  });

  const checkHandler = (e) => {
    setCheck(!checked)
  }

  return (
    <label className={className}>
      <input type="checkbox" onChange={checkHandler} value='Checkbox'></input>
      <span>Checkbox</span>
      <div className={styles.background}></div>
    </label>
  );
};

export default StyledCheckboxFive;
