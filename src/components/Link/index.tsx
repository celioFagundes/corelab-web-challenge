import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

interface IButton {
  path: string
  text: string
}
const LinkButton = (props: IButton) => {
  return (
    <Link to = {props.path} className={styles.link_button}>
        <div className={styles.icon}>
          <AiOutlinePlus />
        </div>

        <p className={styles.link_button_text}>{props.text}</p>
    </Link>
  )
}

export default LinkButton