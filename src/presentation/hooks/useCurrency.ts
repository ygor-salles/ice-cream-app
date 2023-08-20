const { format: formatCurrency } = Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
});

interface UseCurrencyProps {
  valueForm?: string;
  onChangeForm?: (...event: any[]) => void;
}

export function useCurrency({ valueForm, onChangeForm }: UseCurrencyProps) {
  const handleChangeForm = (text: string) => {
    const decimal = Number(text.replace(/\D/g, '')) / 100;
    onChangeForm(formatCurrency(decimal || 0).replace('R$\xa0', ''));
  };

  return [valueForm, handleChangeForm] as const;
}
