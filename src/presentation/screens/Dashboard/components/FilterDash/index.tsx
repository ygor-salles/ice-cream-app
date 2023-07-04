import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { DatePickerField, SelectField, TextApp } from '~components/index';

import { Container, SDateRangePickerField, STextField } from './styles';

export function FilterDash() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    setValue,
    watch,
  } = useForm({
    defaultValues: { dateInit: null, dateFinal: null, description: '', typeSale: '', date: null },
  });

  const { dateInit, dateFinal, typeSale, date } = watch();

  return (
    <Container>
      <TextApp>Filtro de entradas</TextApp>
      <View>
        <SDateRangePickerField
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
        <SelectField control={control} name="typeSale" label="Tipo de venda" required />
        <STextField control={control} name="description" label="Descrição" required />
      </View>
    </Container>
  );
}
