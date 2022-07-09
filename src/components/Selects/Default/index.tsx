import { ChangeEventHandler } from 'react'
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

const Select = (props: ISelectProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{props.label}</label>
      <select
        name={props.name}
        className={styles.select}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        {props.noAllOption && (
          <option hidden value=''>
            Selecione uma opção
          </option>
        )}
        {!props.noAllOption && <option value=''>Todas</option>}
        {props.options.map(opt => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
      {props.errorMessage && <p className={styles.error_message}>{props.errorMessage}</p>}
    </div>
  )
}
export { Select }
