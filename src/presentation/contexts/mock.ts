import { EnumRoleUser, IDescribedUser } from './types';

const mockAuthUser: IDescribedUser = {
  email: 'ygor@gmail.com',
  name: 'Ygor Salles Aniceto Carvalho',
  exp: 1687494205,
  iat: 1686630205,
  role: EnumRoleUser.SUPER,
  sub: '1',
};

export function onSubmit(email: string, password: string): Promise<IDescribedUser> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve(mockAuthUser);
      } else {
        reject(new Error('Failure authenticate!'));
      }
    }, 3000);
  });
}
