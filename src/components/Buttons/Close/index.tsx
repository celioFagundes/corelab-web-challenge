import styles from './styles.module.scss'
import { BiX } from 'react-icons/bi'
interface IButton {
  onClick: () => void
}

const CloseButton = (props: IButton) => {
  return (
    <button onClick={props.onClick} className={styles.close}>
      <BiX size={28} color=' #587169' />
    </button>
  )
}

export { CloseButton }
