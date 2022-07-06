import { useEffect, useState } from 'react'
import { getVehicles } from '../../../lib/api'
import { Button } from '../../../components'
import { Card, CardInfo } from '../../../components/Card'
import { Search } from '../../../components/Inputs'
import styles from './Vehicles.module.scss'
import { IVehicle } from '../../../types/Vehicle'
import { IoOptions } from 'react-icons/io5'
import LinkButton from '../../../components/Link'

const HomeVehicles = () => {
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
            <IoOptions size={50} color='rgba(0,0,0,0.8)' />
          </button>
        </div>
        <LinkButton path='/vehicles/create' text='Adicionar' />
        <h2>Favoritos</h2>
        <section className={styles.cards_wrapper}>
          <Card
            title='Sandero Stepway'
            brand='Renault'
            price={35000}
            year={2018}
            color='Vermelho'
            editUrl='/vehicles/edit/1'
          />
          <Card
            title='Sandero Stepway'
            brand='Renault'
            price={35000}
            year={2018}
            color='Vermelho'
            editUrl='/vehicles/edit/1'
          />
          <Card
            title='Sandero Stepway'
            brand='Renault'
            price={35000}
            year={2018}
            color='Vermelho'
            editUrl='/vehicles/edit/1'
          />
        </section>

        <h2>Meus anúncios</h2>
        <section className={styles.cards_wrapper}></section>
      </main>
    </div>
  )
}

export default HomeVehicles
