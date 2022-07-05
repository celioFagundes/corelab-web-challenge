import { useEffect, useState } from 'react'
import { getVehicles } from '../../lib/api'
import { Button, Card } from '../../components'
import { Search } from '../../components/Inputs'
import styles from './Vehicles.module.scss'
import { IVehicle } from '../../types/Vehicle'
import { FilterIcon } from '../../components/Icons'

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
            <FilterIcon />
          </button>
        </div>

        <Button text='Add new vehicle' onClick={() => {}} />
        <Card title='Sandero Stepway'>
          <p>Price: 22000</p>
          <p>Description: Carro usado por 2 anos...</p>
          <p>Year: 2018</p>
        </Card>
      </main>
    </div>
  )
}

export default VehiclesPage
