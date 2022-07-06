import React, { ReactNode } from 'react'
import styles from './Card.module.scss'
import { AiOutlineHeart, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
interface ICard {
  title: string
  children: ReactNode
  editUrl: string
}
interface ICardInfo {
  info: string
}

const Card = (props: ICard) => {
  return (
    <div className={styles.Card}>
      <div className={styles.actions}>
        <button className={styles.action}>
          <AiOutlineHeart />
        </button>
        <Link to={props.editUrl} className={styles.action}>
          <AiOutlineEdit />
        </Link>
        <button className={styles.action}>
          <AiOutlineDelete />
        </button>
      </div>
      <h2>{props.title}</h2>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}
const CardInfo = (props: ICardInfo) => {
  return <p className={styles.info}>{props.info}</p>
}

export { Card, CardInfo }
