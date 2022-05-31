import { Routes, Route } from 'react-router-dom';

import { Home, Hotel, Hotels } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels' element={<Hotels />} />
      <Route path='/hotels/:id' element={<Hotel />} />
    </Routes>
  );
};

export default App;
