import { useEffect, useState } from 'react'
import { getVehicles } from '../../../lib/api'

import { Card } from '../../../components/Card'
import { Search } from '../../../components/Inputs'
import styles from './Vehicles.module.scss'
import { IVehicle } from '../../../types/Vehicle'
import { IoOptions } from 'react-icons/io5'
import LinkButton from '../../../components/Link'
import { FilterModal } from '../../../components/FilterModal'

const HomeVehicles = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([])
  const [search, setSearch] = useState<string>('')
  const [showModalFilter, setShowModalFilter] = useState(false)
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

  const toggleFilterModal = (state: boolean) => {
    setShowModalFilter(state)
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
          <button className={styles.filter_button} onClick={() => toggleFilterModal(true)}>
            <IoOptions size={50} color='rgba(0,0,0,0.8)' />
          </button>
          <FilterModal isOpen={showModalFilter} closeFn={() => toggleFilterModal(false)} />
        </div>
        <LinkButton path='/vehicles/create' text='Adicionar' />
        {vehicles && vehicles.length === 0 && <p>Nenhum veículo encontrado</p>}
        {vehicles && vehicles.length > 0 && (
          <>
            <h2>Favoritos</h2>
            {vehicles.filter(vehicle => vehicle.is_favorite).length === 0 && (
              <p>Nenhum veículo como favorito</p>
            )}
            <section className={styles.cards_wrapper}>
              {vehicles.map(
                vehicle =>
                  vehicle.is_favorite && (
                    <Card
                      key={vehicle.id}
                      title={vehicle.name}
                      description={vehicle.description}
                      plate={vehicle.plate}
                      brand={vehicle.brand}
                      price={vehicle.price}
                      year={vehicle.year}
                      color={vehicle.color}
                      editUrl={`/vehicles/edit/${vehicle.id}`}
                      isFavorite={vehicle.is_favorite}
                    />
                  )
              )}
            </section>
            <h2>Meus anúncios</h2>
            {vehicles.filter(vehicle => !vehicle.is_favorite).length === 0 && (
              <p>Nenhum veículo encontrado</p>
            )}
            <section className={styles.cards_wrapper}>
              {vehicles.map(
                vehicle =>
                  !vehicle.is_favorite && (
                    <Card
                      key={vehicle.id}
                      title={vehicle.name}
                      description={vehicle.description}
                      plate={vehicle.plate}
                      brand={vehicle.brand}
                      price={vehicle.price}
                      year={vehicle.year}
                      color={vehicle.color}
                      editUrl={`/vehicles/edit/${vehicle.id}`}
                      isFavorite={vehicle.is_favorite}
                    />
                  )
              )}
            </section>
          </>
        )}
      </main>
    </div>
  )
}

export default HomeVehicles
