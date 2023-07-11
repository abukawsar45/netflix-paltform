import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useProvider = () => {
  const provider = useContext(AuthContext)
  return provider;
};

export default useProvider;