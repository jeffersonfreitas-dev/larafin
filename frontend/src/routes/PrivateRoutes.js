import { useState, useEffect } from 'react';
import { auth } from '../firebaseConnect';
import { onAuthStateChanged } from 'firebase/auth';

import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({ children }){
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if(user) {
          const userData = {
            uid: user.uid,
            email: user.email
          }
  
          localStorage.setItem("@datailUser", JSON.stringify(userData));
          setLoading(false);
          setSigned(true);
  
        }else {
          setLoading(false);
          setSigned(false);
        }
      })
    }
    checkLogin();
  }, []);

  if(loading){
    return(<div></div>)
  }

  if(!signed) {
    return <Navigate to="/" />
  }

  return children;
}