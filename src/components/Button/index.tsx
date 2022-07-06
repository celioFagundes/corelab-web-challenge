import { AddIcon } from '../Icons/Add'
import styles from './styles.module.scss'

interface IButton {
  onClick: () => void
  text: string
}

const Button = (props: IButton) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <div className={styles.icon}>
        <AddIcon />
      </div>

      <p className={styles.button_text}>{props.text}</p>
    </button>
  )
}

export default Button
