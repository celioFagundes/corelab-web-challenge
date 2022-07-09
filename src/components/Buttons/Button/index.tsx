import styles from './styles.module.scss'

interface IButton {
  onClick: () => void
  text: string
}

const Button = (props: IButton) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <p className={styles.button_text}>{props.text}</p>
    </button>
  )
}

export { Button }
