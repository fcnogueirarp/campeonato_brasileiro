import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cb2003 from './pages/cb2003';
import Cb2004 from './pages/cb2004';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Cb2003 />} />
      <Route path="2004" element={<Cb2004 />} />
    </Routes>
  );
}
