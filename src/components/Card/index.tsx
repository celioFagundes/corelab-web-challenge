import React, { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import {
  AiOutlineHeart,
  AiOutlineEdit,
  AiOutlineDelete,
  AiFillHeart,
} from 'react-icons/ai'
import styles from './Card.module.scss'

interface ICard {
  title: string
  description: string
  plate: string
  price: number
  brand: string
  year: number
  color: string
  editUrl: string
  isFavorite: boolean
  toggleIsFavorite: MouseEventHandler<HTMLButtonElement>
  removeVehicle: MouseEventHandler<HTMLButtonElement>
}
interface ICardInfo {
  dataName: string
  dataValue: string | number
}

function CardInfo(props: ICardInfo) {
  const { dataName, dataValue } = props
  return (
    <div className={styles.info_wrapper}>
      <p className={styles.info_name}>{dataName}</p>
      <p className={styles.info_value}>{dataValue}</p>
    </div>
  )
}
function Card(props: ICard) {
  const {
    title,
    color,
    price,
    brand,
    year,
    plate,
    description,
    editUrl,
    isFavorite,
    toggleIsFavorite,
    removeVehicle,
  } = props
  return (
    <div className={styles.card}>
      <div className={`${styles.card_header} ${styles[color]}`}>
        <h2>{title}</h2>
        <p className={styles.price}>R$ {price.toLocaleString('pt-br')}</p>
      </div>
      <div className={styles.content}>
        <CardInfo dataName="Marca" dataValue={brand} />
        <CardInfo dataName="Ano" dataValue={year} />
        <CardInfo dataName="Placa" dataValue={plate} />
        <CardInfo dataName="Cor" dataValue={color} />
      </div>
      <div className={styles.bottom_wrapper}>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.action}
            onClick={toggleIsFavorite}
          >
            {isFavorite ? <AiFillHeart color="#f03a47" /> : <AiOutlineHeart />}
          </button>
          <Link to={editUrl} className={styles.action}>
            <AiOutlineEdit />
          </Link>
          <button
            type="button"
            className={styles.action}
            onClick={removeVehicle}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  )
}

export { Card, CardInfo }
