import Checkbox from './components/Checkbox/Checkbox';
import StyledCheckboxOne from './components/StyledCheckboxOne/StyledCheckboxOne';
import styles from './App.module.css';
import Button from '@material-ui/core/Button';
import StyledCheckboxTwo from './components/StyledCheckboxTwo/StyledCheckboxTwo';
import StledCheckboxThree from './components/StyledCheckboxThree/StyledCheckboxThree';
import StyledCheckboxBNW from './components/StyledCheckboxBNW/StyledCheckboxBNW';
import StyledCheckboxBNWInverted from './components/StyledCheckboxBNWInverted/StyledCheckboxBNWInverted';
import StyledCheckboxFour from './components/StyledCheckboxFour/StyledCheckboxFour';
import StyledCheckboxFive from './components/StyledCheckboxFive/StyledCheckboxFive';
import SVGSquare from './components/SVGSquare/SVGSquare';
import StyledCheckboxSVG from './components/StyledCheckboxSVG/StyledCheckboxSVG';
import StyledCheckboxSVGTwo from './components/StyledCheckboxSVGTwo/StyledCheckboxSVGTwo';
import StyledCheckboxSVGThree from './components/StyledCheckboxSVGThree/StyledCheckboxSVGThree';

function App() {
  return (
    <div className="App">
      <div className={styles.item}>
        <Checkbox />
      </div>
      <div className={styles.item}>
        <StyledCheckboxOne />
      </div>
      <div className={styles.item}>
        <Button variant="outlined">Default</Button>
      </div>
      <div className={styles.item}>
        <StyledCheckboxTwo />
      </div>
      <div className={styles.item}>
        <StledCheckboxThree />
      </div>
      <div className={styles.item}>
        <StyledCheckboxBNW />
      </div>
      <div className={styles.item}>
        <StyledCheckboxBNWInverted />
      </div>
      <div className={styles.item}>
        <StyledCheckboxFour />
      </div>
      <div className={styles.item}>
        <StyledCheckboxFive />
      </div>
      <div className={styles.item}>
        <SVGSquare />
      </div>
      <div className={styles.item}>
        <StyledCheckboxSVG />
      </div>
      <div className={styles.item}>
        <StyledCheckboxSVGTwo />
      </div>
      <div className={styles.item}>
        <StyledCheckboxSVGThree />
      </div>
    </div>
  );
}

export default App;
