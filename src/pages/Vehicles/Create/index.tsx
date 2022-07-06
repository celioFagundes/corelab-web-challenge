import { useFormik } from 'formik'
import { ButtonSubmit } from '../../../components/Buttons'
import styles from './styles.module.scss'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
const colorOptions = ['Vermelho', 'Preto', 'Azul', 'Prata', 'Branco']
const VehicleSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe o nome do veículo'),
  brand: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe o nome da marca'),
  color: Yup.string()
    .min(1, 'Por favor, selecione uma cor')
    .required('Por favor, selecione uma cor'),
  year: Yup.number()
    .test('len', 'O ano deve ter 4 digitos', val => (val ? val.toString().length === 4 : false))
    .max(new Date().getFullYear(), 'Ano deve ser menor ou igual ao ano atual'),
  plate: Yup.string()
    .trim()
    .matches(/^[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}$/, 'Digite uma placa válida')
    .required('Por favor, informe a placa do veículo'),
})
const CreateVehicle = () => {
  const form = useFormik({
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: true,
    initialValues: {
      name: '',
      brand: '',
      color: '',
      year: 0,
      plate: '',
    },
    validationSchema: VehicleSchema,
    onSubmit: async values => {
      /*const dateParts = values.birth_date.split('/')
      const validDate = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`
      const newValues = { ...values, birth_date: validDate }
      const createData = await axios.post('http://localhost:3000/agents/', newValues)
      if (createData.status) {
        router.push('/agents')
      }*/
    },
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to='/' className={styles.back}>
          <BiArrowBack size={28} color=' #587169' />
        </Link>
        <h1>Criar novo veículo</h1>
      </div>
      <form className={styles.form} onSubmit={form.handleSubmit}>
        <div className={styles.input_wrapper}>
          <label className={styles.label}>Nome</label>
          <input
            name='name'
            placeholder='Digite o nome do veículo'
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={styles.input}
          />
          <p className={styles.error_message}>{form.errors.name}</p>
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.label}>Marca</label>
          <input
            name='brand'
            placeholder='Digite a marca do veículo'
            value={form.values.brand}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={styles.input}
          />
          <p className={styles.error_message}>{form.errors.brand}</p>
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.label}>Cor</label>
          <select
            name='color'
            value={form.values.color}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={styles.input}
          >
            <option hidden value=''>
              Selecione a cor
            </option>
            {colorOptions.map(color => (
              <option value={color}>{color}</option>
            ))}
          </select>
          <p className={styles.error_message}>{form.errors.color}</p>
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.label}>Ano</label>
          <input
            type='number'
            name='year'
            placeholder='Digite o ano do veículo'
            value={form.values.year}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={styles.input}
          />
          <p className={styles.error_message}>{form.errors.year}</p>
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.label}>Placa</label>
          <input
            name='plate'
            placeholder='Digite a placa do veículo'
            value={form.values.plate}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={styles.input}
          />
          <p className={styles.error_message}>{form.errors.plate}</p>
        </div>
        <div className={styles.button_wrapper}>
          <ButtonSubmit text='Salvar' />
        </div>
      </form>
    </div>
  )
}

export default CreateVehicle
