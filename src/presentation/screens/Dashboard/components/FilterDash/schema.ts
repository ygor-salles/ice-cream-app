import * as yup from 'yup';

import { IDates } from '~types/index';

export const fieldsDash = {
  DATE_INIT: 'date_init',
  DATE_FINAL: 'date_final',
  DESCRIPTION: 'description',
  TYPE_SALE: 'type_sale',
  DATE: 'date',
  CHECK: 'check',
  COUNT: 'count',
};

export interface IFormFilterDash {
  date_init: IDates;
  date_final: IDates;
  description: string;
  type_sale: string;
  date: IDates;
  check: boolean;
  count: string;
}

export const defaultValues: IFormFilterDash = {
  date_init: null,
  date_final: null,
  description: '',
  type_sale: '',
  date: null,
  check: false,
  count: '',
};

export const schemaFilterDash = yup.object().shape({
  date_init: yup.object().required('obrigatório'),
  date_final: yup.object().required('obrigatório'),
  description: yup.string().required('obrigatório'),
  type_sale: yup.string().required('obrigatório'),
  date: yup.object().required('obrigatório'),
  check: yup.bool().required('obrigatório'),
  count: yup.string().required('obrigatório'),
});
