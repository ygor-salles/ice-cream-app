import { colors } from '~styles/constants';

export function getTitleCardInfoDash(title: 'input' | 'output' | 'profit' | 'debit') {
  if (title === 'input') return { text: 'Entradas', color: colors.GREEN };
  if (title === 'output') return { text: 'Saídas', color: colors.RED };
  if (title === 'profit') return { text: 'Lucro', color: colors.WHITE };
  if (title === 'debit') return { text: 'Dívida dos clientes', color: colors.TEXT };
  return { text: '', color: colors.TEXT };
}

export const formatNumberToCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value);

export const monthNames = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const dayNames = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export const dayNamesShort = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
