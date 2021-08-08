import React from 'react';
import { useHistory } from 'react-router-dom';
import globalState from '@/globalState';
import Swal from 'sweetalert2';

export default function LogoutPage() {
  const history = useHistory();
  const [, setMe] = globalState.useGlobalState('me');

  React.useEffect(() => {
    setTimeout(() => {
      setMe(null);
      localStorage.removeItem('token');
      history.push('/');
    }, 1500);
    Swal.fire({
      position: 'center-center',
      icon: 'success',
      title: '成功登出',
      showConfirmButton: false,
      timer: 1500,
    });
  }, []);

  return (
    <div className="vh-100" />
  );
}
