import { BiX } from 'react-icons/bi'
import Button from '../Buttons/Button'

import styles from './styles.module.scss'

const colorOptions = ['Vermelho', 'Preto', 'Azul', 'Prata', 'Branco']
interface IFilter {
  closeFn: () => void
  isOpen: boolean
}

const FilterModal = (props: IFilter) => {
  return (
    <>
      {props.isOpen && (
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.header}>
              <h1>Filtrar veículos</h1>
              <button onClick={props.closeFn} className={styles.close}>
                <BiX size={28} color=' #587169' />
              </button>
            </div>
            <div className={styles.input_wrapper}>
              <label className={styles.label}>Marca</label>
              <select name='color' className={styles.input}>
                <option hidden value=''>
                  Selecione a cor
                </option>
                {colorOptions.map(color => (
                  <option value={color}>{color}</option>
                ))}
              </select>
            </div>
            <div className={styles.input_wrapper}>
              <label className={styles.label}>Cor</label>
              <select name='color' className={styles.input}>
                <option hidden value=''>
                  Selecione a a marca
                </option>
                {colorOptions.map(color => (
                  <option value={color}>{color}</option>
                ))}
              </select>
            </div>
            <div className={styles.input_wrapper}>
              <label className={styles.label}>Ano</label>
              <select name='color' className={styles.input}>
                <option hidden value=''>
                  Selecione o ano
                </option>
                {colorOptions.map(color => (
                  <option value={color}>{color}</option>
                ))}
              </select>
            </div>
            <div className={styles.price_inputs_wrapper}>
              <div className={styles.input_wrapper}>
                <label className={styles.label}>Preço minímo</label>
                <input
                  type='number'
                  name='year'
                  placeholder='Digite o preço minimo'
                  className={styles.input}
                />
              </div>
              <div className={styles.input_wrapper}>
                <label className={styles.label}>Preço maximo</label>
                <input
                  type='number'
                  name='year'
                  placeholder='Digite o preço maximo'
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.button_wrapper}>
              <Button text='Aplicar filtros' onClick={() => true}/>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { FilterModal }
