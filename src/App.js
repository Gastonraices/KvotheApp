import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { ItemListContainer } from './components/container/ItemListContainer';
import { Section } from './components/section/Section';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
