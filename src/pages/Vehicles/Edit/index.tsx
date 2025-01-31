import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { BiArrowBack } from 'react-icons/bi'
import { IVehicle } from '../../../types/Vehicle'
import styles from './styles.module.scss'
import { colorOptions, brandOptions } from '../../../utils/options'
import { editVehicle, GetVehicleById } from '../../../lib/api'

import { Input } from '../../../components/Inputs'
import { Select } from '../../../components/Selects'
import { ButtonSubmit } from '../../../components/Buttons'

const VehicleSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe o nome do veículo'),
  description: Yup.string()
    .min(15, 'Por favor, informe um descrição com pelo menos 10 caracteres')
    .required('Por favor, informe a descrição do veículo'),
  brand: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe o nome da marca'),
  color: Yup.string()
    .min(1, 'Por favor, selecione uma cor')
    .required('Por favor, selecione uma cor'),
  price: Yup.number()
    .min(3000, 'Preço minímo 3.000')
    .required('Por favor informe o ano'),
  year: Yup.number()
    .test('tamanho', 'O ano deve ter 4 digitos', val =>
      val ? val.toString().length === 4 : false,
    )
    .max(new Date().getFullYear(), 'Ano deve ser menor ou igual ao ano atual')
    .required('Por favor informe o ano'),
  plate: Yup.string()
    .trim()
    .matches(/^[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}$/, 'Digite uma placa válida')
    .required('Por favor, informe a placa do veículo'),
})
function EditVehicle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { vehicle } = GetVehicleById(id)
  const form = useFormik({
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: true,
    initialValues: {
      name: '',
      brand: '',
      description: '',
      color: '',
      year: 0,
      plate: '',
      price: 0,
    },
    validationSchema: VehicleSchema,
    onSubmit: async values => {
      const updateVehicle: IVehicle = await editVehicle(Number(id), values)
      if (updateVehicle) {
        navigate('/')
      }
    },
  })
  useEffect(() => {
    const fillFormFields = () => {
      if (!vehicle) {
        return null
      }
      form.setFieldValue('name', vehicle.name)
      form.setFieldValue('brand', vehicle.brand)
      form.setFieldValue('description', vehicle.description)
      form.setFieldValue('color', vehicle.color)
      form.setFieldValue('year', vehicle.year)
      form.setFieldValue('plate', vehicle.plate)
      form.setFieldValue('price', vehicle.price)
      return null
    }
    fillFormFields()
  }, [vehicle])
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to="/" className={styles.back}>
          <BiArrowBack size={28} color=" #587169" />
        </Link>
        <h1>Editar veículo</h1>
      </div>
      <form className={styles.form} onSubmit={form.handleSubmit}>
        <Input
          label="Name"
          name="name"
          placeholder="Digite o nome do veículo"
          value={form.values.name}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          errorMessage={form.errors.name}
        />
        <Input
          label="Descrição"
          name="description"
          placeholder="Digite  a descrição do veículo"
          value={form.values.description}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          errorMessage={form.errors.description}
        />
        <Select
          label="Marca"
          name="brand"
          value={form.values.brand}
          options={brandOptions}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          errorMessage={form.errors.brand}
          noAllOption
        />
        <Select
          label="Cor"
          name="color"
          value={form.values.color}
          options={colorOptions}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          errorMessage={form.errors.color}
          noAllOption
        />
        <Input
          type="number"
          label="Ano"
          name="year"
          placeholder="Digite  o ano do veículo"
          value={form.values.year}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          errorMessage={form.errors.year}
        />
        <Input
          type="number"
          label="Preço"
          name="price"
          placeholder="Digite  o preço do veículo"
          value={form.values.price}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          errorMessage={form.errors.price}
        />
        <Input
          label="Placa"
          name="plate"
          placeholder="Ex. de placa válida: AAA1A33"
          value={form.values.plate}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          errorMessage={form.errors.plate}
        />
        <div className={styles.button_wrapper}>
          <ButtonSubmit text="Salvar" />
        </div>
      </form>
    </div>
  )
}

export default EditVehicle
