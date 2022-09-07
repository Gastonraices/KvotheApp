import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { ItemListContainer } from './components/container/ItemListContainer';
import { Section } from './components/section/Section';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Section/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
