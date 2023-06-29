import { useForm } from 'react-hook-form';

import { DateRangePickerField, TextField, DatePickerField, TextApp } from '~components/index';

import { Container, styles } from './styles';

export function FilterDash() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    setValue,
    watch,
  } = useForm({ defaultValues: { dateInit: null, dateFinal: null, typeSale: '', date: null } });

  const { dateInit, dateFinal, typeSale, date } = watch();

  return (
    <Container>
      <TextApp>Filtro de entradas</TextApp>
      <DateRangePickerField
        control={control}
        minDate={new Date()}
        nameInit="dateInit"
        nameFinal="dateFinal"
        valueInit={dateInit}
        valueFinal={dateFinal}
        labelInit="Data início"
        labelFinal="Data fim"
        requiredInit
        requiredFinal
      />
      <DatePickerField
        control={control}
        minDate={new Date()}
        name="date"
        label="Data teste"
        value={date}
        required
      />
      <TextField
        control={control}
        name="typeSale"
        label="Tipo de venda"
        placeholder="Selecione"
        required
      />
    </Container>
  );
}
