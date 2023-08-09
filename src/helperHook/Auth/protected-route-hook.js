import { useEffect, useState } from 'react';

export default function ProtectedRouteHook() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );
  const [isUser, setIsUser] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    if (userData) {
      if (userData.role === 'user') {
        setIsUser(true);
        setIsAdmin(false);
      } else {
        setIsAdmin(true);
        setIsUser(false);
      }
    } else {
      setUserData(null);
      setIsUser(false);
      setIsAdmin(false);
    }
  }, [userData]);

  return { userData, isUser, isAdmin };
}
