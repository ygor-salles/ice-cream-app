import { colors } from '@styles/constants';

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
