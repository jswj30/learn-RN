import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { authorize, logout } from '../slices/auth';
import { useMemo } from 'react';

export default function useAuthActions() {
  const dispatch = useDispatch();
  
  // return {
  //   authorize: (user) => dispatch(authorize(user)), 
  //   logout: () => dispatch(logout()), 
  // };

  // return bindActionCreators({authorize, logout}, dispatch);

  return useMemo(() => {
    return (bindActionCreators({authorize, logout}, dispatch))
  }, [dispatch]); 
}
