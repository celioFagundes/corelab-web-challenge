import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'

import styles from './style.module.scss'

interface ISearch {
  onSubmit: (slug: string) => void
  currentKeyword: string
}

function Search(props: ISearch) {
  const { currentKeyword, onSubmit } = props
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (
    keyboardEvent: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (keyboardEvent.code === 'Enter') {
      onSubmit(inputValue.trim())
    }
  }
  const handleInputChange = (text: string) => {
    setInputValue(text)
  }
  const resetSearch = () => {
    setInputValue('')
    onSubmit('')
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
          type="text"
          placeholder="Digite o termo e pressione a tecla enter para pesquisar"
          value={inputValue}
        />
        {currentKeyword !== '' && (
          <button
            type="button"
            onClick={resetSearch}
            className={styles.results_reset}
          >
            <AiOutlineClose size={18} />
          </button>
        )}
      </div>
    </div>
  )
}

export { Search }
