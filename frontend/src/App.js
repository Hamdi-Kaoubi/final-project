import { Route, Routes } from 'react-router-dom';
import './App.css';
import Favorites from './Components/Favorites/Favorites';
import Home from './Components/Home/Home';
import Test from './Components/Home/Test/Test';
import Login from './Components/Login/Login';
import Navigation from './Components/Navigation/Navigation';
import AlertError from './Components/Profile/AlertError';

import PrivateRoute from './Components/Profile/PrivateRoute';
import Profile from './Components/Profile/Profile';
import SignUp from './Components/SignUp/SignUp';
import UsersUploads from './Components/UsersUploads/UsersUploads';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AlertError/>
      <Routes>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
        <Route path='/uploads' element={<UsersUploads/>}/>
        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/videos/:id' element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
