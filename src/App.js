import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Portfolios from './Components/Portfolios';


function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component= {Home} />
        <Routes>
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/portfolios" component={Portfolios} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
