import 'bootstrap/dist/css/bootstrap.min.css';
import AppCorePage from './components/displayContact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <AppCorePage />
          
    </div>

    
  );
}

export default App;
