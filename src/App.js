// App.js

import React, { useState } from 'react'
import styles from './App.module.css'

const App = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [input4, setInput4] = useState('')
  const [dropdownValue1, setDropdownValue1] = useState('')
  const [dropdownValue2, setDropdownValue2] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [rows, setRows] = useState([])

  const handleInputChange = (e, setInput) => {
    const value = e.target.value
    setInput(value)
    checkButtonStatus()
  }

  const handleDropdownChange1 = (e) => {
    const value = e.target.value
    setDropdownValue1(value)
    checkButtonStatus()
  }

  const handleDropdownChange2 = (e) => {
    const value = e.target.value
    setDropdownValue2(value)
    checkButtonStatus()
  }

  const checkButtonStatus = () => {
    if (input1 && input2 && dropdownValue1 && dropdownValue2) {
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true)
    }
  }

  const handleSubmit = () => {
    const newRow = {
      input1,
      input2,
      input3,
      input4,
      dropdownValue1,
      dropdownValue2,
    }
    setRows([...rows, newRow])
    // Clearing input values after submission
    setInput1('')
    setInput2('')
    setInput3('')
    setInput4('')
    setDropdownValue1('')
    setDropdownValue2('')
    setIsButtonDisabled(true)
  }

  return (
    <>
      <div className={styles.container}>
        <h1>DASHBOARD</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.labelInputContainer}>
            <label htmlFor='dropdown1'>Entity</label>
            <select
              id='dropdown1'
              value={dropdownValue1}
              onChange={handleDropdownChange1}
            >
              <option value=''>Select an option</option>
              <option value='Option 1'>Portfolio</option>
              <option value='Option 2'>XS Strategy</option>
              <option value='Option 3'>TX Strategy</option>
              <option value='Option 4'>XS Model</option>
              <option value='Option 5'>TS Model</option>
              <option value='Option 6'>XS Factor</option>
              <option value='Option 7'>TS Factor</option>
            </select>
          </div>
          <div className={styles.labelInputContainer}>
            <label htmlFor='input1'>Name</label>
            <input
              type='text'
              id='input1'
              value={input1}
              onChange={(e) => handleInputChange(e, setInput1)}
              placeholder='Type Here'
            />
          </div>
          <div className={styles.labelInputContainer}>
            <label htmlFor='input2'>XCalibur</label>
            <input
              type='text'
              id='input2'
              value={input2}
              onChange={(e) => handleInputChange(e, setInput2)}
              placeholder='Type Here'
            />
          </div>
          <div className={styles.labelInputContainer}>
            <label htmlFor='input3'>Start Date</label>
            <input
              type='text'
              id='input3'
              value={input3}
              onChange={(e) => handleInputChange(e, setInput3)}
              placeholder='DD-MM-YYYY'
            />
          </div>
          <div className={styles.labelInputContainer}>
            <label htmlFor='input4'>End Date</label>
            <input
              type='text'
              id='input4'
              value={input4}
              onChange={(e) => handleInputChange(e, setInput4)}
              placeholder='DD-MM-YYYY'
            />
          </div>

          <div className={styles.labelInputContainer}>
            <label htmlFor='dropdown2'>ViewFunction:</label>
            <select
              id='dropdown2'
              value={dropdownValue2}
              onChange={handleDropdownChange2}
            >
              <option value=''>Select an option</option>
              <option value='Option A'>Option A</option>
              <option value='Option B'>Option B</option>
              <option value='Option C'>Option C</option>
              <option value='Option D'>Option D</option>
              <option value='Option E'>Option E</option>
              <option value='Option F'>Option F</option>
              <option value='Option G'>Option G</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            disabled={isButtonDisabled}
            className={styles.button}
          >
            Add
          </button>
        </div>
        {rows.map((row, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.labelInputContainer}>
              <select
                id={`dropdown1_${index}`}
                value={row.dropdownValue1}
                disabled
              >
                <option value=''>Select an option</option>
                <option value='Option 1'>Option 1</option>
                <option value='Option 2'>Option 2</option>
                <option value='Option 3'>Option 3</option>
                <option value='Option 4'>Option 4</option>
                <option value='Option 5'>Option 5</option>
                <option value='Option 6'>Option 6</option>
                <option value='Option 7'>Option 7</option>
              </select>
            </div>
            <div className={styles.labelInputContainer}>
              <input
                type='text'
                id={`input1_${index}`}
                value={row.input1}
                disabled
              />
            </div>
            <div className={styles.labelInputContainer}>
              <input
                type='text'
                id={`input2_${index}`}
                value={row.input2}
                disabled
              />
            </div>
            <div className={styles.labelInputContainer}>
              <input
                type='text'
                id={`input3_${index}`}
                value={row.input3}
                disabled
              />
            </div>
            <div className={styles.labelInputContainer}>
              <input
                type='text'
                id={`input4_${index}`}
                value={row.input4}
                disabled
              />
            </div>

            <div className={styles.labelInputContainer}>
              <select
                id={`dropdown2_${index}`}
                value={row.dropdownValue2}
                disabled
              >
                <option value=''>Select an option</option>
                <option value='Option A'>Option A</option>
                <option value='Option B'>Option B</option>
                <option value='Option C'>Option C</option>
                <option value='Option D'>Option D</option>
                <option value='Option E'>Option E</option>
                <option value='Option F'>Option F</option>
                <option value='Option G'>Option G</option>
              </select>
            </div>
            <div className={styles.labelInputContainer}>
              <input type='checkbox' id={`checkbox_${index}`} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.centerDiv}>
        <div className={styles.FootRow}>
          <div className={styles.labelInputContainer}>
            <select
              id='dropdown2'
              value={dropdownValue2}
              onChange={handleDropdownChange2}
            >
              <option value=''>Transormation</option>
              <option value='Option A'>Transormation A</option>
              <option value='Option B'>Transormation B</option>
              <option value='Option C'>Transormation C</option>
              <option value='Option D'>Transormation D</option>
              <option value='Option E'>Transormation E</option>
              <option value='Option F'>Transormation F</option>
              <option value='Option G'>Transormation G</option>
            </select>
          </div>
          <button className={styles.button}>View Transformation</button>
        </div>
      </div>
    </>
  )
}

export default App
