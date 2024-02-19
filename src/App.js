import './app.scss';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Cards from './Components/Cards/Cards';
import Statistics from './Components/Statistics/Statistics';
import Visitors from './Components/Visitors/Visitors';
import Books from './Components/Books/Books';
import ModalWindow from './Components/ModalWindow/ModalWindow';

function App() {
  return (
    <>
      <Header/>
      <Menu/>
      <Routes>
        <Route path='/books' element = {<Books/>}/>
        <Route path='/visitors' element = {<Visitors/>}/>
        <Route path='/statistics' element = {<Statistics/>}/>
        <Route path='/cards' element = {<Cards/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
      <ModalWindow />
    </>
  );
}

export default App;
