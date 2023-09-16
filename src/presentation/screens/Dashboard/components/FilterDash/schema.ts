import * as yup from 'yup';

import { IDates, IFile } from '~types/index';

export interface IFormFilterDash {
  date_init: IDates;
  date_final: IDates;
  description: string;
  // product: string;
  // combinations: string[];
  // date: IDates;
  // check: boolean;
  // switch: boolean;
  // count: string;
  // file?: IFile | null;
  // money: string;
}

export const defaultValues: IFormFilterDash = {
  date_init: null,
  date_final: null,
  description: '',
  // product: '',
  // combinations: [],
  // date: null,
  // check: false,
  // switch: false,
  // count: '1',
  // file: null,
  // money: '',
};

export const fieldsDash = {
  DATE_INIT: 'date_init',
  DATE_FINAL: 'date_final',
  DESCRIPTION: 'description',
  // PRODUCT: 'product',
  // COMBINATIONS: 'combinations',
  // DATE: 'date',
  // CHECK: 'check',
  // SWITCH: 'switch',
  // COUNT: 'count',
  // FILE: 'file',
  // MONEY: 'money',
};

export const schemaFilterDash = yup.object().shape({
  date_init: yup.object().required('obrigatório'),
  date_final: yup.object().required('obrigatório'),
  description: yup.string().optional(),
  // product: yup.string().required('obrigatório'),
  // combinations: yup.array().optional(),
  // date: yup.object().required('obrigatório'),
  // check: yup.bool().required('obrigatório'),
  // switch: yup.bool(),
  // count: yup.string().required('obrigatório'),
  // file: yup.object().optional().nullable(),
  // money: yup.string().required('obrigatório'),
});
