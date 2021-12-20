import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cb2003 from './pages/cb2003';
import Cb2004 from './pages/cb2004';
import Cb2005 from './pages/cb2005';
import Cb2006 from './pages/cb2006';
import Cb2007 from './pages/cb2007';
import Cb2008 from './pages/cb2008';
import Cb2009 from './pages/cb2009';
import Cb2010 from './pages/cb2010';
import Cb2011 from './pages/cb2011';
import Cb2012 from './pages/cb2012';
import Cb2013 from './pages/cb2013';
import Cb2014 from './pages/cb2014';
import Cb2015 from './pages/cb2015';

import Principal from './pages/principal';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="2003" element={<Cb2003 />} />
      <Route path="2004" element={<Cb2004 />} />
      <Route path="2005" element={<Cb2005 />} />
      <Route path="2006" element={<Cb2006 />} />
      <Route path="2007" element={<Cb2007 />} />
      <Route path="2008" element={<Cb2008 />} />
      <Route path="2009" element={<Cb2009 />} />
      <Route path="2010" element={<Cb2010 />} />
      <Route path="2011" element={<Cb2011 />} />
      <Route path="2012" element={<Cb2012 />} />
      <Route path="2013" element={<Cb2013 />} />
      <Route path="2014" element={<Cb2014 />} />
      <Route path="2015" element={<Cb2015 />} />
    </Routes>
  );
}
