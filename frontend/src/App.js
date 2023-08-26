import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import ItrFiling from './components/ItrFiling';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/' element={<ItrFiling/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
