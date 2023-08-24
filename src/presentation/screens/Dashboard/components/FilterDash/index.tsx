import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { CheckField } from '~components/Form/CheckField';
import { InputFileField } from '~components/Form/InputFileField';
import { SelectMultipleField } from '~components/Form/SelectMultipleField';
import { TextFieldCount } from '~components/Form/TextFieldCount';
import {
  DatePickerField,
  SelectField,
  TextApp,
  DateRangePickerField,
  TextField,
} from '~components/index';
import { buttonThemes } from '~constants/ButtonThemes';

import { mockCombinations, mockProducts } from './mock';
import { IFormFilterDash, defaultValues, fieldsDash, schemaFilterDash } from './schema';
import { Container, Form, SButton } from './styles';

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
          name={fieldsDash.PRODUCT}
          options={mockProducts.map(item => item.name)}
          label="Produto"
          required
        />
        <SelectMultipleField
          control={control}
          name={fieldsDash.COMBINATIONS}
          options={mockCombinations.map(item => item.name)}
          label="Combinações"
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
