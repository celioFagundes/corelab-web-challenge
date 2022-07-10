import React from 'react'
import styles from './styles.module.scss'

interface IButton {
  text: string
}

function ButtonSubmit(props: IButton) {
  const { text } = props
  return (
    <button type="submit" className={styles.button}>
      <p className={styles.button_text}>{text}</p>
    </button>
  )
}

export { ButtonSubmit }
