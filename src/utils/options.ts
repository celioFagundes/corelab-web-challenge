const colorOptions = ['Vermelho', 'Preto', 'Azul', 'Prata', 'Branco']
const brandOptions = [
  'Fiat',
  'Citroen',
  'Volkswagen',
  'Chevrolet',
  'Toyota',
  'Nissan',
  'Hyundai',
  'Honda',
  'Ford',
  'Peugeot',
  'Renault',
]
const currentYear = new Date().getFullYear()
const calcYears = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)
const yearOptions = calcYears(currentYear, currentYear - 50, -1)
export { colorOptions, brandOptions , yearOptions}
