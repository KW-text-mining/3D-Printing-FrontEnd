import { useContext } from 'react';
//
import { AuthContext } from './JwtContext';

// ----------------------------------------------------------------------

export const useAuthContext = () => {
  // useContext : 데이터를 전역적으로 관리해야할 때 사용 - 로그인한유저, 테마...
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

  return context;
};
