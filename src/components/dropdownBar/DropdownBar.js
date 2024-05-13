import React, { useState, useEffect, useRef } from 'react'
import styles from './DropdownBar.module.css'

const DropdownBar = (props) => {
  const dropDownList = props.options
  const value = props.value
  const setValue = props.setValue

  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = (option) => {
    setIsOpen(false)
    setValue(option)
  }

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div
        className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ''}`}
        onClick={toggleDropdown}
      >
        <span className={styles.selectedOption}>{value || 'SELECT'}</span>
        <span className={styles.dropdownArrow}>&#9660;</span>
      </div>
      {isOpen && (
        <ul className={styles.dropdownOptions}>
          {dropDownList.map((option) => (
            <li
              key={option}
              className={styles.dropdownOption}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownBar
