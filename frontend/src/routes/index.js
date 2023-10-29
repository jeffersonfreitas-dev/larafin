import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Admin from '../pages/Admin';
import PrivateRoutes from './PrivateRoutes';
import Account from '../pages/Account';

function RoutesApp() {
  return(
    <Routes>
      <Route path='/' element= { <Home/>} />
      <Route path='/register' element= { <Register/>}/>
      <Route path='/admin' element= { <PrivateRoutes> <Admin/> </PrivateRoutes>}/>
      <Route path='/accounts' element= { <Account />} />
    </Routes>
  )
}

export default RoutesApp;