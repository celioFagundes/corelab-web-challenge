import { ChangeEventHandler } from 'react'
import { SearchIcon } from '../../Icons'
import styles from './style.module.scss'
interface ISearch {
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Search = (props: ISearch) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search_icon}>
        <SearchIcon />
      </div>
      <input className={styles.input} onChange = {props.onChange} type='text' placeholder={props.placeholder} value={props.value} />
    </div>
  )
}

export { Search }
