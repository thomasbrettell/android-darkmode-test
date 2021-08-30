import Checkbox from './components/Checkbox/Checkbox';
import StyledCheckboxOne from './components/StyledCheckboxOne/StyledCheckboxOne';
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <div className={styles.item}>
        <Checkbox />
      </div>
      <div className={styles.item}>
        <StyledCheckboxOne />
      </div>
    </div>
  );
}

export default App;
