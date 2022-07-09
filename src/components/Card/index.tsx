import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import { MouseEventHandler } from 'react'
import { AiOutlineHeart, AiOutlineEdit, AiOutlineDelete, AiFillHeart } from 'react-icons/ai'

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
  data_name: string
  data_value: string | number
}

const CardInfo = (props: ICardInfo) => {
  return (
    <div className={styles.info_wrapper}>
      <p className={styles.info_name}>{props.data_name}</p>
      <p className={styles.info_value}>{props.data_value}</p>
    </div>
  )
}
const Card = (props: ICard) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.card_header} ${styles[props.color]}`}>
        <h2>{props.title}</h2>
        <p className={styles.price}>R$ {props.price.toLocaleString('pt-br')}</p>
      </div>
      <div className={styles.content}>
        <CardInfo data_name='Marca' data_value={props.brand} />
        <CardInfo data_name='Ano' data_value={props.year} />
        <CardInfo data_name='Placa' data_value={props.plate} />
        <CardInfo data_name='Cor' data_value={props.color} />
      </div>
      <div className={styles.bottom_wrapper}>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.actions}>
          <button className={styles.action} onClick={props.toggleIsFavorite}>
            {props.isFavorite ? <AiFillHeart color='#f03a47' /> : <AiOutlineHeart />}
          </button>
          <Link to={props.editUrl} className={styles.action}>
            <AiOutlineEdit />
          </Link>
          <button className={styles.action} onClick={props.removeVehicle}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  )
}

export { Card, CardInfo }
