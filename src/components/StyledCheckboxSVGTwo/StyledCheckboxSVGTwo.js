import { useState } from 'react';
import styles from './StyledCheckboxSVGTwo.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const StyledCheckboxSVGTwo = () => {
  const [checked, setCheck] = useState(false);

  const className = cx({
    StyledCheckboxSVGTwo: true,
    checked: checked,
  });

  const checkHandler = (e) => {
    setCheck(!checked);
  };

  return (
    <label className={className}>
      <input type="checkbox" onChange={checkHandler} value="Checkbox"></input>
      <span>Checkbox</span>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <rect width="100%" height="100%" />
      </svg>
    </label>
  );
};

export default StyledCheckboxSVGTwo;
