import 'bootstrap/dist/css/bootstrap.min.css';
import AppCorePage from './components/displayContact';
import updateContact from './components/updateContact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <div className="App">
          <AppCorePage />
    </div>

    
  );
}

export default App;
