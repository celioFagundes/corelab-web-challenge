import React, { ChangeEventHandler } from 'react'
import styles from './styles.module.scss'

interface ISelectProps {
  label: string
  name: string
  value: string
  options: string[] | number[]
  onChange: ChangeEventHandler<HTMLSelectElement>
  onBlur?: ChangeEventHandler<HTMLSelectElement>
  errorMessage?: string
  noAllOption?: boolean
}

function Select(props: ISelectProps) {
  const {
    label,
    name,
    value,
    options,
    onChange,
    onBlur,
    errorMessage,
    noAllOption,
  } = props
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{label}</p>
      <select
        name={name}
        className={styles.select}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {noAllOption && (
          <option hidden value="">
            Selecione uma opção
          </option>
        )}
        {!noAllOption && <option value="">Todas</option>}
        {options.map(opt => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
      {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  )
}
export { Select }
