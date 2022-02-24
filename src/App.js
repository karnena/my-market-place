import './App.css';
import Dashboard from './components/dashboard';
import {Routes, Route} from 'react-router-dom'
import FormPage from './components/form';
import AllFeaturesGrid from './components/grid';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route exact path='/register' element={<FormPage/>}/>
        <Route exact path='/grid' element={<AllFeaturesGrid/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
