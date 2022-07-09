import { useState } from 'react'
import { BiX } from 'react-icons/bi'
import { IFilterOptions } from '../../types/Filter'
import Button from '../Buttons/Button'

import styles from './styles.module.scss'

const currentYear = new Date().getFullYear()
const calcYears = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)
const yearOptions = calcYears(currentYear, currentYear - 50, -1)
const colorOptions = ['Vermelho', 'Preto', 'Azul', 'Prata', 'Branco']
const brandOptions = [
  'Fiat',
  'Citroen',
  'Volkswagen',
  'Chevrolet',
  'Toyota',
  'Nissan',
  'Hyundai',
  'Honda',
  'Ford',
  'Peugeot',
  'Renault'
]

interface IFilter {
  closeFn: () => void
  isOpen: boolean
  applyFilterFn: (options: IFilterOptions) => void
}

const FilterModal = (props: IFilter) => {
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
    props.applyFilterFn(filterValues)
    props.closeFn()
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
      {props.isOpen && (
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.header}>
              <h1>Filtrar veículos</h1>
              <button onClick={props.closeFn} className={styles.close}>
                <BiX size={28} color=' #587169' />
              </button>
            </div>

            <div className={styles.input_wrapper}>
              <label className={styles.label}>Marca</label>
              <select
                name='brand'
                className={styles.input}
                value={filterValues.brand}
                onChange={evt => handleFilterValues('brand', evt.target.value)}
              >
                <option value=''>Todas</option>
                {brandOptions.map(brand => (
                  <option value={brand} key={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.input_wrapper}>
              <label className={styles.label}>Cor</label>
              <select
                name='color'
                className={styles.input}
                value={filterValues.color}
                onChange={evt => handleFilterValues('color', evt.target.value)}
              >
                <option value=''>Todas</option>
                {colorOptions.map(color => (
                  <option value={color} key={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.input_wrapper}>
              <label className={styles.label}>Ano</label>
              <select
                name='year'
                className={styles.input}
                value={filterValues.year}
                onChange={evt => handleFilterValues('year', evt.target.value)}
              >
                <option value=''>Todos</option>
                {yearOptions.map(years => (
                  <option value={years} key={years}>
                    {years}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.price_inputs_wrapper}>
              <div className={styles.input_wrapper}>
                <label className={styles.label}>Preço minímo</label>
                <input
                  type='number'
                  name='year'
                  placeholder='Digite o preço minimo'
                  className={styles.input}
                  value={filterValues.minValue}
                  onChange={evt => handleFilterValues('minValue', evt.target.value)}
                />
              </div>
              <div className={styles.input_wrapper}>
                <label className={styles.label}>Preço maximo</label>
                <input
                  type='number'
                  name='year'
                  placeholder='Digite o preço maximo'
                  className={styles.input}
                  value={filterValues.maxValue}
                  onChange={evt => handleFilterValues('maxValue', evt.target.value)}
                />
              </div>
            </div>
            <div className={styles.button_wrapper}>
              <Button text='Limpar filtros' onClick={resetFilter} />
              <Button text='Aplicar filtros' onClick={handleSubmit} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { FilterModal }
