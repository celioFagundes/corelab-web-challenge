import React from 'react'
import styles from './styles.module.scss'

interface IButton {
  onClick: () => void
  text: string
}

function Button(props: IButton) {
  const { text, onClick } = props
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <p className={styles.button_text}>{text}</p>
    </button>
  )
}
export { Button }
