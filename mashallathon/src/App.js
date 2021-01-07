import './App.css';
import Chris from './Components/Chris/Chris.jsx';
import Monica from './Components/Monica/Monica.jsx';
import Alreem from './Components/Alreem/Alreem.jsx';
import Mohammed from './Components/Mohammed/Mohammed.jsx';


function App() {
  return (
    <div className="flex">
      <Chris />
      <Monica />
      <Alreem />
      <Mohammed/>
    </div>
  );
}

export default App;
