import { createContext, useState } from 'react';

import { onSubmit } from './mock';
import { AppProviderProps, IAuthContextData, IDescribedUser } from './types';

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export function AuthProvider({ children }: AppProviderProps) {
  const [describedUser, setDescribedUser] = useState<IDescribedUser | null>(
    () =>
      // puxar token do storage
      // const objToken = getTokenLocalStorage();
      // if (objToken) {
      //   return objToken
      // }

      null,
  );

  const authenticate = async (email: string, password: string) => {
    try {
      const response = await onSubmit(email, password);
      console.log(response);

      // decriptar o token

      setDescribedUser(response);
      // setar o token no local storage

      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const logout = () => {
    setDescribedUser(null);
    // setar o token do local storage pra null
  };

  return (
    <AuthContext.Provider value={{ ...describedUser, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
