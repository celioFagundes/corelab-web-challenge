import styles from './styles.module.scss'
import { ChangeEventHandler } from 'react'

interface IInput {
  type?: string
  label: string
  name: string
  placeholder: string
  value: string | number
  onChange: ChangeEventHandler<HTMLInputElement>
  onBlur?: ChangeEventHandler<HTMLInputElement>
  erroMessage?: string
}

const Input = (props: IInput) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{props.label}</label>
      <input
        type={props.type ? props.type : 'text'}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={styles.input}
      />
      <p className={styles.error_message}>{props.erroMessage}</p>
    </div>
  )
}
export { Input }
