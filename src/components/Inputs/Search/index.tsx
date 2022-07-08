import { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import styles from './style.module.scss'
interface ISearch {
  onSubmit: (slug: string) => void
  currentKeyword: string
}

const Search = (props: ISearch) => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (keyboardEvent: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyboardEvent.code === 'Enter') {
      props.onSubmit(inputValue)
    }
  }
  const handleInputChange = (text: string) => {
    setInputValue(text)
  }
  const resetSearch = () => {
    setInputValue('')
    props.onSubmit('')
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.input_wrapper}>
        <div className={styles.search_icon}>
          <AiOutlineSearch />
        </div>
        <input
          className={styles.input}
          onKeyDown={handleKeyDown}
          onChange={evt => handleInputChange(evt.target.value)}
          type='text'
          placeholder='Digite o termo e pressione a tecla enter para pesquisar'
          value={inputValue}
        />
      </div>
      {props.currentKeyword !== '' && (
        <div className={styles.results_wrapper}>
          <p className={styles.results_text}>Mostrando resultados para "{props.currentKeyword}"</p>
          <button onClick={resetSearch} className={styles.results_reset}>
            <AiOutlineClose size={18} />
          </button>
        </div>
      )}
    </div>
  )
}

export { Search }
