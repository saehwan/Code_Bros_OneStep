import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Login from './screens/login';
import Dashboard from './screens/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
