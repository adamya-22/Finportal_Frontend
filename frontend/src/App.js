import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
    </Routes>
    </>
  );
}

export default App;
