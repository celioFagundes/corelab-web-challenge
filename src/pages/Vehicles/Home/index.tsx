import { useEffect, useState } from 'react'
import { getVehicles, removeVehicles, toggleIsFavorite } from '../../../lib/api'

import { Card } from '../../../components/Card'
import { Search } from '../../../components/Inputs'
import styles from './Vehicles.module.scss'
import { IVehicle } from '../../../types/Vehicle'
import { IoOptions } from 'react-icons/io5'
import LinkButton from '../../../components/Link'
import { FilterModal } from '../../../components/FilterModal'
import useSWR from 'swr'

const HomeVehicles = () => {
  const [queryParams, setQueryParams] = useState({
    keyword: '',
    color: '',
    brand: '',
    year: 0,
    minValue: 0,
    maxValue: 0,
  })

  const { data, error, mutate } = useSWR<IVehicle[]>(
    `http://localhost:3333/vehicles/?keyword=${queryParams.keyword}&color=${queryParams.color}&brand=${queryParams.brand}&year=${queryParams.year}&minValue=${queryParams.minValue}&maxValue=${queryParams.maxValue}`,
    getVehicles
  )
  const [showModalFilter, setShowModalFilter] = useState(false)

  const handleInputSearch = (value: string) => {
    setQueryParams({ ...queryParams, keyword: value })
  }

  const toggleFilterModal = (state: boolean) => {
    setShowModalFilter(state)
  }
  const handleIsFavorite = async (id: number) => {
    await toggleIsFavorite(id)
    mutate()
  }
  const handleRemove = async (id: number) => {
    await removeVehicles(id)
    mutate()
  }

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <div className={styles.search_filter_box}>
          <Search
            onSubmit={handleInputSearch}
            currentKeyword = {queryParams.keyword}
          />
          <button className={styles.filter_button} onClick={() => toggleFilterModal(true)}>
            <IoOptions size={50} color='rgba(0,0,0,0.8)' />
          </button>
          <FilterModal isOpen={showModalFilter} closeFn={() => toggleFilterModal(false)} />
        </div>
        <LinkButton path='/vehicles/create' text='Adicionar' />
        {data && data.length === 0 && <p>Nenhum veículo encontrado</p>}
        {data && data.length > 0 && (
          <>
            <h2>Favoritos</h2>
            {data.filter(vehicle => vehicle.is_favorite).length === 0 && (
              <p>Nenhum veículo como favorito</p>
            )}
            <section className={styles.cards_wrapper}>
              {data.map(
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
                      toggleIsFavorite={() => handleIsFavorite(vehicle.id)}
                      removeVehicle={() => handleRemove(vehicle.id)}
                    />
                  )
              )}
            </section>
            <h2>Meus anúncios</h2>
            {data.filter(vehicle => !vehicle.is_favorite).length === 0 && (
              <p>Nenhum veículo encontrado</p>
            )}
            <section className={styles.cards_wrapper}>
              {data.map(
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
                      toggleIsFavorite={() => handleIsFavorite(vehicle.id)}
                      removeVehicle={() => handleRemove(vehicle.id)}
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
