import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  DatePickerField,
  SelectField,
  TextApp,
  DateRangePickerField,
  TextField,
} from '~components/index';
import { buttonThemes } from '~constants/ButtonThemes';

import { IFormFilterDash, defaultValues, fieldsDash, schemaFilterDash } from './schema';
import { Container, Form, SButton } from './styles';

const mockArray = [
  { id: 1, name: 'Item 1', price: 1 },
  { id: 2, name: 'Item 2', price: 2 },
  { id: 3, name: 'Item 3', price: 3 },
  { id: 4, name: 'Item 4', price: 4 },
  { id: 5, name: 'Item 5', price: 5 },
  { id: 6, name: 'Item 6', price: 6 },
  { id: 7, name: 'Item 7', price: 7 },
  { id: 8, name: 'Item 8', price: 8 },
  { id: 9, name: 'Item 9', price: 9 },
  { id: 10, name: 'Item 10', price: 10 },
  { id: 11, name: 'Item 11', price: 11 },
  { id: 12, name: 'Item 12', price: 12 },
  { id: 13, name: 'Item 13', price: 13 },
  { id: 14, name: 'Item 14', price: 14 },
  { id: 15, name: 'Item 15', price: 15 },
  // { id: 16, name: 'Item 16', price: 16 },
  // { id: 17, name: 'Item 17', price: 17 },
  // { id: 18, name: 'Item 18', price: 18 },
  // { id: 19, name: 'Item 19', price: 19 },
  // { id: 20, name: 'Item 20', price: 20 },
  // { id: 21, name: 'Item 21', price: 21 },
];

export function FilterDash() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    setValue,
    watch,
  } = useForm<IFormFilterDash>({
    resolver: yupResolver(schemaFilterDash),
    defaultValues,
  });

  const { date_init, date_final, type_sale, date } = watch();

  const onSubmit = (values: IFormFilterDash) => {
    console.log(values);
  };

  return (
    <Container>
      <TextApp>Filtro de entradas</TextApp>
      <Form>
        <DateRangePickerField
          control={control}
          minDate={new Date()}
          nameInit={fieldsDash.DATE_INIT}
          nameFinal={fieldsDash.DATE_FINAL}
          valueInit={date_init}
          valueFinal={date_final}
          labelInit="Data início"
          labelFinal="Data fim"
          requiredInit
          requiredFinal
        />
        <DatePickerField
          control={control}
          minDate={new Date()}
          name={fieldsDash.DATE}
          label="Data teste"
          value={date}
          required
        />
        <SelectField
          control={control}
          name={fieldsDash.TYPE_SALE}
          options={mockArray.map(item => item.name)}
          label="Tipo de venda"
          required
        />
        <TextField
          control={control}
          name={fieldsDash.DESCRIPTION}
          label="Descrição"
          placeholder="Digite"
          required
        />

        <SButton themeButton={buttonThemes.PRIMARY} onPress={handleSubmit(onSubmit)}>
          Buscar
        </SButton>
      </Form>
    </Container>
  );
}
