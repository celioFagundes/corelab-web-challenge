import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import styles from './styles.module.scss'

interface IButton {
  path: string
  text: string
}
function LinkButton(props: IButton) {
  const { path, text } = props
  return (
    <Link to={path} className={styles.link_button}>
      <div className={styles.icon}>
        <AiOutlinePlus />
      </div>

      <p className={styles.link_button_text}>{text}</p>
    </Link>
  )
}

export { LinkButton }
