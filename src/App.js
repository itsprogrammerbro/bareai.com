import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services'
import Pricing from './components/pages/Pricing';
import About from './components/pages/About';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
