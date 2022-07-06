import { useEffect, useState } from 'react'
import { getVehicles } from '../../lib/api'
import { Button } from '../../components'
import { Card, CardInfo } from '../../components/Card'
import { Search } from '../../components/Inputs'
import styles from './Vehicles.module.scss'
import { IVehicle } from '../../types/Vehicle'
import {IoOptions} from 'react-icons/io5'
const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles()
      setVehicles(payload)
    }

    fetchVehicles()
  }, [])

  const handleInputSearch = (value: string) => {
    setSearch(value)
  }

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <div className={styles.search_filter_box}>
          <Search
            placeholder='Buscar'
            value={search}
            onChange={evt => handleInputSearch(evt.target.value)}
          />
          <button className={styles.filter_button}>
            <IoOptions />
          </button>
        </div>
        <Button text='Adicionar' onClick={() => {}} />
        <Card title='Sandero Stepway'>
          <CardInfo info='Preço: 22000' />
          <CardInfo info='Descrição: Carro usado por 2 anos...' />
          <CardInfo info='Ano: 2018' />
          <CardInfo info='Cor: Vermelho' />
        </Card>
      </main>
    </div>
  )
}

export default VehiclesPage
