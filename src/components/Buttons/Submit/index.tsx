import styles from './styles.module.scss'

interface IButton {
  text: string
}

const ButtonSubmit = (props: IButton) => {
  return (
    <button className={styles.button} type ='submit'>
      <p className={styles.button_text}>{props.text}</p>
    </button>
  )
}

export { ButtonSubmit}
