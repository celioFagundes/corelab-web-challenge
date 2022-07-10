import React, { ChangeEventHandler } from 'react'
import styles from './styles.module.scss'

interface IInput {
  type?: string | 'text'
  label: string
  name: string
  placeholder: string
  value: string | number
  onChange: ChangeEventHandler<HTMLInputElement>
  onBlur?: ChangeEventHandler<HTMLInputElement>
  errorMessage?: string
}

function Input(props: IInput) {
  const {
    type,
    name,
    label,
    value,
    placeholder,
    onChange,
    onBlur,
    errorMessage,
  } = props
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{label}</p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={styles.input}
      />
      <p className={styles.error_message}>{errorMessage}</p>
    </div>
  )
}
export { Input }
