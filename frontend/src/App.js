import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Test from './Components/Home/Test/Test';
import Login from './Components/Login/Login';
import Navigation from './Components/Navigation/Navigation';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login/signup' element={<SignUp/>}/>
        <Route path='/videos' element={<Test />}/>
      </Routes>
    </div>
  );
}

export default App;
