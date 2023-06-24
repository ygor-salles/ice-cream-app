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
  } = useForm({ defaultValues: { dateInit: null, dateFinal: null } });

  const { dateInit, dateFinal } = watch();

  return (
    <Container>
      <TextApp>Filtro de entradas</TextApp>
      <DatePickerField
        control={control}
        name="date"
        onSelectedDates={({ initialDate, finalDate }: IParamsOnSelectedDates) => {
          setValue('dateInit', initialDate);
          setValue('dateFinal', finalDate);
        }}
        valueInit={dateInit}
        valueFinal={dateFinal}
        minDate={new Date()}
        // customStyle={styles.inputFieldBottom}
        title="Filtro por data"
        labelText1="Data início"
        labelText2="Data fim"
      />
    </Container>
  );
}
