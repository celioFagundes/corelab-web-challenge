import { useState } from 'react'

import { GetVehicles,  removeVehicles, toggleIsFavorite } from '../../../lib/api'
import styles from './styles.module.scss'
import { IFilterOptions } from '../../../types/Filter'

import { Card } from '../../../components/Card'
import { Search } from '../../../components/Inputs'
import { LinkButton } from '../../../components/Buttons'
import { FilterModal } from '../../../components/FilterModal'

const HomeVehicles = () => {
  const [showModalFilter, setShowModalFilter] = useState(false)
  const [queryParams, setQueryParams] = useState({
    keyword: '',
    color: '',
    brand: '',
    year: '',
    minValue: '',
    maxValue: '',
  })

  const { vehicles, update } = GetVehicles(queryParams)

  const toggleFilterModal = (state: boolean) => {
    setShowModalFilter(state)
  }
  const handleInputSearch = (value: string) => {
    setQueryParams({ ...queryParams, keyword: value })
  }
  const handleApplyFilter = (options: IFilterOptions) => {
    setQueryParams({ ...queryParams, ...options })
  }
  const handleIsFavorite = async (id: number) => {
    await toggleIsFavorite(id)
    update()
  }
  const handleRemove = async (id: number) => {
    await removeVehicles(id)
    update()
  }

  const countFiltersApplied = () => {
    let filterCount = 0
    queryParams.color && filterCount++
    queryParams.brand && filterCount++
    queryParams.year && filterCount++
    queryParams.minValue && filterCount++
    queryParams.maxValue && filterCount++
    return filterCount
  }
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.search_filter_box}>
          <Search onSubmit={handleInputSearch} currentKeyword={queryParams.keyword} />
          <FilterModal
            filterCount={countFiltersApplied()}
            applyFilterFn={handleApplyFilter}
            isOpen={showModalFilter}
            openFn={() => toggleFilterModal(true)}
            closeFn={() => toggleFilterModal(false)}
          />
        </div>
        {queryParams.keyword !== '' && (
          <p>Mostrando resultados de busca para "{queryParams.keyword}"</p>
        )}
        <LinkButton path='/vehicles/create' text='Adicionar' />
        {vehicles && vehicles.length === 0 && <p>Nenhum veículo encontrado</p>}
        {vehicles && vehicles.length > 0 && (
          <>
            <h2 className={styles.section_title}>Favoritos</h2>
            {vehicles.filter(vehicle => vehicle.is_favorite).length === 0 ? (
              <p>Nenhum veículo como favorito</p>
            ) : (
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
                        toggleIsFavorite={() => handleIsFavorite(vehicle.id)}
                        removeVehicle={() => handleRemove(vehicle.id)}
                      />
                    )
                )}
              </section>
            )}
            <h2 className={styles.section_title}>Meus anúncios</h2>
            {vehicles.filter(vehicle => !vehicle.is_favorite).length === 0 ? (
              <p>Nenhum veículo encontrado</p>
            ) : (
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
                        toggleIsFavorite={() => handleIsFavorite(vehicle.id)}
                        removeVehicle={() => handleRemove(vehicle.id)}
                      />
                    )
                )}
              </section>
            )}
          </>
        )}
      </main>
    </div>
  )
}

export default HomeVehicles
