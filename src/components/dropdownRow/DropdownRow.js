import React, { useState } from 'react'
import styles from './DropdownRow.module.css'
import DropdownBar from '../dropdownBar/DropdownBar'
import SelectButton from '../selectButton/SelectButton'
import data from '../../data/dorpdownData.js'

const DropdownRow = () => {
  const useEnhancedPortfolio = (initialValue, setSelectedStrategy, setSelectedModel) => {
    const [value, setValue] = useState(initialValue)
    const setValueEnhanced = (newValue) => {
      console.log('Setting new value:', newValue)
      setValue(newValue)
      setSelectedStrategy('SELECT')
      setSelectedModel('SELECT')
    }
    return [value, setValueEnhanced]
  }

  const useEnhancedStrategy = (initialValue, setSelectedModel) => {
    const [value, setValue] = useState(initialValue)
    const setValueEnhanced = (newValue) => {
      console.log('Setting new value:', newValue)
      setValue(newValue)
      setSelectedModel('SELECT')
    }
    return [value, setValueEnhanced]
  }

  const useEnhancedModel = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const setValueEnhanced = (newValue) => {
      console.log('Setting new value:', newValue)
      setValue(newValue)
    }
    return [value, setValueEnhanced]
  }

  const [selectedModel, setSelectedModel] = useEnhancedModel('SELECT')
  const [selectedStrategy, setSelectedStrategy] = useEnhancedStrategy(
    'SELECT',
    setSelectedModel
  )
  const [selectedPortfolio, setSelectedPortfolio] = useEnhancedPortfolio(
    'SELECT',
    setSelectedStrategy,
    setSelectedModel
  )

  const PortfolioList = Object.keys(data)

  const StartegyList =
    selectedPortfolio === 'SELECT' ? [] : Object.keys(data[selectedPortfolio])
  const ModelList =
    selectedStrategy === 'SELECT'
      ? []
      : Object.keys(data[selectedPortfolio][selectedStrategy])

  return (
    <div className={styles.dropdownBarsContainer}>
      <DropdownBar
        options={PortfolioList}
        value={selectedPortfolio}
        setValue={setSelectedPortfolio}
      />
      <DropdownBar
        options={StartegyList}
        value={selectedStrategy}
        setValue={setSelectedStrategy}
      />
      <DropdownBar
        options={ModelList}
        value={selectedModel}
        setValue={setSelectedModel}
      />
      <SelectButton />
    </div>
  )
}

export default DropdownRow
