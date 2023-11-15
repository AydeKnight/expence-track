import Root from './view/root';
import Register from './view/login/register';
import Dashboard from  './view/dashboard/index';
import Transaction from './view/transaction';
import Reports from './view/reports';
import Settings from './view/settings';
import './App.css';
import { Routes, Route,  BrowserRouter  } from 'react-router-dom';
import { initializeIcons } from '@fluentui/react/lib/Icons';

function App() {
  initializeIcons()
  return (
    <div >
    <BrowserRouter>
     <Routes> 
          <Route path="/" element={<Root/>} />
          <Route path="/register" element={<Register/>} />
          
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/transaction" element={<Transaction/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/settings" element={<Settings/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
