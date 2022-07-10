import React from 'react'
import { BiX } from 'react-icons/bi'
import styles from './styles.module.scss'

interface IButton {
  onClick: () => void
}

function CloseButton(props: IButton) {
  const { onClick } = props
  return (
    <button type="button" onClick={onClick} className={styles.close}>
      <BiX size={28} color=" #587169" />
    </button>
  )
}

export { CloseButton }
