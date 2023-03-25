import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Test from './Components/Home/Test/Test';
import Login from './Components/Login/Login';
import Navigation from './Components/Navigation/Navigation';
import AlertError from './Components/Profile/AlertError';

import PrivateRoute from './Components/Profile/PrivateRoute';
import Profile from './Components/Profile/Profile';
import SignUp from './Components/SignUp/SignUp';
import UsersUploads from './Components/UsersUploads/UsersUploads';
import { get_current } from './redux/action/AuthAction';

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(get_current())
  }, [dispatch])
  const user=useSelector((state)=>state.UserReducer.user)
  return (
    <div className="App">
      <Navigation />
      <AlertError/>
      <Routes>
        <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
        <Route path='/uploads' element={<UsersUploads/>}/>
        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/videos/:id' element={<Test user={user} get_current={get_current}/>}/>
      </Routes>
    </div>
  );
}

export default App;
