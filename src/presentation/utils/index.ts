import { colors } from '~styles/constants';

export function getTitleCardInfoDash(title: 'input' | 'output' | 'profit' | 'debit') {
  const titleOpt = {
    input: { text: 'Entradas', color: colors.GREEN },
    output: { text: 'Saídas', color: colors.RED },
    profit: { text: 'Lucro', color: colors.WHITE },
    debit: { text: 'Dívida dos clientes', color: colors.TEXT },
  };

  return titleOpt[title] || titleOpt.input;
}

export const { format: formatCurrency } = Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
});

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

export function currencyStringToNumber(currencyString: string): number {
  const numberValue = Number(currencyString.replace(/[^\d,-]/g, '').replace(',', '.'));

  return numberValue;
}
