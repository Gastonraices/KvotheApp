
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { ItemListContainer } from './components/container/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
