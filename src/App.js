import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services'
import Pricing from './components/pages/Pricing';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/pricing" exact component={Pricing}/>
          <Route path="/about" exact component={About}/>
          <Route path="/signup" exact component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
