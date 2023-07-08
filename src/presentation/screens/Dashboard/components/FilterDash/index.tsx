import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { DatePickerField, SelectField, TextApp } from '~components/index';

import { Container, SDateRangePickerField, STextField } from './styles';

const mockArray = [
  { id: 1, name: 'Item 1', price: 1 },
  { id: 2, name: 'Item 2', price: 2 },
  { id: 3, name: 'Item 3', price: 3 },
  { id: 4, name: 'Item 4', price: 4 },
  { id: 5, name: 'Item 5', price: 5 },
  { id: 6, name: 'Item 6', price: 6 },
  { id: 7, name: 'Item 7', price: 7 },
  { id: 8, name: 'Item 8', price: 8 },
  { id: 9, name: 'Item 9', price: 8 },
];

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
        <SelectField
          control={control}
          name="typeSale"
          options={mockArray.map(item => item.name)}
          label="Tipo de venda"
          required
        />
        <STextField control={control} name="description" label="Descrição" required />
      </View>
    </Container>
  );
}
