import React, { useState } from 'react'
import styles from './SelectButton.module.css'

const SelectButton = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleButtonClick = () => {
    // Add your button click logic here
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleButtonClick}>
        Add combination to list
      </button>
    </div>
  )
}

export default SelectButton
