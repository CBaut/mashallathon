import './App.css';
import Chris from './Components/Chris/Chris.jsx';
import Monica from './Components/Monica/Monica.jsx';
import Murtaja from './Components/Murtaja/Murtaja.jsx';

function App() {
  return (
    <div className="flex">
      <Chris />
      <Monica />
      <Murtaja/>
    </div>
  );
}

export default App;
