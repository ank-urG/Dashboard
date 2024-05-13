import styles from './App.module.css'
import DropdownBar from './components/dropdownRow/DropdownRow'

function App() {
  return (
    <>
      <div className={styles.container}>
        <h className={styles.heading}>Let's start making Dashboard</h>
      </div>
      <DropdownBar />
    </>
  )
}

export default App
