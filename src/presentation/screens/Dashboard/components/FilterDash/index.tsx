import { useForm } from 'react-hook-form';

import { DateRangePickerField } from '~components/index';
import { TextApp } from '~components/TextApp';

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
      <DateRangePickerField
        control={control}
        minDate={new Date()}
        nameInit="dateInit"
        nameFinal="dateFinal"
        valueInit={dateInit}
        valueFinal={dateFinal}
        labelInit="Data início"
        labelFinal="Data fim"
      />
    </Container>
  );
}
