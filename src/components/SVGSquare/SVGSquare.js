import styles from './SVGSquare.module.css'
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

const SVGSquare = () => {
  const [checked, setCheck] = useState(false)

  const className = cx({
    SVGSquare: true,
    checked: checked,
  });

  const checkHandler = (e) => {
    console.log('!')
    setCheck(!checked)
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={checkHandler}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    </svg>
  );
};

export default SVGSquare;
