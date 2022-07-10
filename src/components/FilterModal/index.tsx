import React, { useState } from 'react'
import { IoOptions } from 'react-icons/io5'
import { brandOptions, colorOptions, yearOptions } from '../../utils/options'
import { IFilterOptions } from '../../types/Filter'

import styles from './styles.module.scss'
import { Button, CloseButton } from '../Buttons'
import { Select } from '../Selects'
import { Input } from '../Inputs'

interface IFilter {
  isOpen: boolean
  filterCount: number
  openFn: () => void
  closeFn: () => void
  applyFilterFn: (options: IFilterOptions) => void
}

function FilterModal(props: IFilter) {
  const { isOpen, filterCount, openFn, closeFn, applyFilterFn } = props
  const [filterValues, setFilterValues] = useState<IFilterOptions>({
    brand: '',
    color: '',
    year: '',
    minValue: '',
    maxValue: '',
  })
  const handleFilterValues = (key: string, value: string) => {
    setFilterValues({ ...filterValues, [key]: value })
  }
  const handleSubmit = () => {
    applyFilterFn(filterValues)
    closeFn()
  }
  const resetFilter = () => {
    setFilterValues({
      brand: '',
      color: '',
      year: '',
      minValue: '',
      maxValue: '',
    })
  }
  return (
    <>
      <button type="button" className={styles.filter_button} onClick={openFn}>
        <IoOptions size={50} color="rgba(0,0,0,0.8)" />
        <p className={styles.filter_count}>{filterCount}</p>
      </button>
      {isOpen && (
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.header}>
              <h1>Filtrar veículos</h1>
              <CloseButton onClick={closeFn} />
            </div>
            <Select
              label="Marca"
              name="brand"
              value={filterValues.brand}
              options={brandOptions}
              onChange={evt => handleFilterValues('brand', evt.target.value)}
            />
            <Select
              label="Cor"
              name="color"
              value={filterValues.color}
              options={colorOptions}
              onChange={evt => handleFilterValues('color', evt.target.value)}
            />
            <Select
              label="Ano"
              name="year"
              value={filterValues.year}
              options={yearOptions}
              onChange={evt => handleFilterValues('year', evt.target.value)}
            />
            <div className={styles.price_inputs_wrapper}>
              <Input
                type="number"
                label="Preço mínimo"
                name="min-value"
                placeholder="Digite o preço mínimo"
                value={filterValues.minValue}
                onChange={evt =>
                  handleFilterValues('minValue', evt.target.value)
                }
              />
              <Input
                type="number"
                label="Preço máximo"
                name="max-value"
                placeholder="Digite o preço máximo"
                value={filterValues.maxValue}
                onChange={evt =>
                  handleFilterValues('maxValue', evt.target.value)
                }
              />
            </div>
            <div className={styles.button_wrapper}>
              <Button text="Limpar filtros" onClick={resetFilter} />
              <Button text="Aplicar filtros" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { FilterModal }
