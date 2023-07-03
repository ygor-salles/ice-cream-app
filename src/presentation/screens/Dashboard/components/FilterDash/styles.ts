import styled from 'styled-components/native';

import { DateRangePickerField, TextField } from '~components/index';

export const Container = styled.View`
  gap: 10px;
  justify-content: center;
`;

export const SDateRangePickerField = styled(DateRangePickerField)`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

export const STextField = styled(TextField)`
  border-bottom-width: 0;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`;
