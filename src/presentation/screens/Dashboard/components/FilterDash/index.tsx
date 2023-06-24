import { useForm } from 'react-hook-form';

import { DatePickerField } from '~components/index';
import { TextApp } from '~components/TextApp';
import { IParamsOnSelectedDates } from '~types/index';

import { Container, styles } from './styles';

export function FilterDash() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    setValue,
    watch,
  } = useForm({ defaultValues: { date: null } });

  const values = watch();

  return (
    <Container>
      <TextApp>Filtro de entradas</TextApp>
      <DatePickerField
        control={control}
        label="Datas (ida e volta)"
        name="date"
        onSelectedDates={({ initialDate, finalDate }: IParamsOnSelectedDates) => {
          console.log('initialDate', initialDate);
          console.log('finalDate', finalDate);
        }}
        value={values.date}
        minDate={new Date()}
        customStyle={styles.inputFieldBottom}
        title="Filtro por data"
        buttonText1="Selecionar datas"
        labelText1="Data início"
        labelText2="Data fim"
      />
    </Container>
  );
}
