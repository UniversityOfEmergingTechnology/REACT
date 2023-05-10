import './App.css';
import {NavLink,Routes , Route ,Link} from 'react-router-dom'
import Home from './components/Home';
import { Login } from './components/Login';
import About from './components/About'
import NewPage from './components/NewPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">




      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/login' Component={Login}></Route>
        <Route path='/newPage' Component={NewPage}></Route>
        <Route path='*' Component={NotFound}></Route>
      </Routes>
    </div>
  );
}

export default App;
