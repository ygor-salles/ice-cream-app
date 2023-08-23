import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { CheckField } from '~components/Form/CheckField';
import { InputFileField } from '~components/Form/InputFileField';
import { TextFieldCount } from '~components/Form/TextFieldCount';
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
  { id: 1, name: 'Paçoca', price: 1 },
  { id: 2, name: 'Chiclete', price: 2 },
  { id: 3, name: 'Picolé', price: 3 },
  { id: 4, name: 'Geladinho', price: 4 },
  { id: 5, name: 'Salgadinho', price: 5 },
  { id: 6, name: 'Bolacha', price: 6 },
  { id: 7, name: 'Bala', price: 7 },
  { id: 8, name: 'Doce de leite', price: 8 },
  { id: 9, name: 'Geladinho Gourmet', price: 9 },
  { id: 10, name: 'Açaí 400', price: 10 },
  { id: 11, name: 'Açaí 500', price: 11 },
  { id: 12, name: 'Açaí 600', price: 12 },
  { id: 13, name: 'Açaí 700', price: 13 },
  { id: 14, name: 'Açaí 1L', price: 14 },
  { id: 15, name: 'Sorvete de pote', price: 15 },
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

  const { date_init, date_final, date } = watch();

  const onSubmit = (values: IFormFilterDash) => {
    console.log(values);
  };

  return (
    <Container>
      <TextApp>Filtro de entradas</TextApp>
      <Form>
        <DatePickerField
          control={control}
          minDate={new Date()}
          name={fieldsDash.DATE}
          label="Data teste"
          value={date}
          required
        />
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
        <CheckField control={control} name={fieldsDash.CHECK} label="Teste de check" />
        <TextFieldCount control={control} name={fieldsDash.COUNT} label="Quantidade" required />
        <InputFileField
          control={control}
          name={fieldsDash.FILE}
          label="Anexe a nota fiscal"
          required
        />
        <TextField
          control={control}
          name={fieldsDash.MONEY}
          label="Valor"
          placeholder="Digite"
          required
          currency
          maxLength={10}
        />
        <SButton themeButton={buttonThemes.PRIMARY} onPress={handleSubmit(onSubmit)}>
          Buscar
        </SButton>
      </Form>
    </Container>
  );
}
