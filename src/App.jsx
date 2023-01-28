import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Level01 from "./pages/Level01"

export default function App() {
  return (
    <div>
      Hallo
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Level01 />}>
                    </Route>
        </Routes>
    </BrowserRouter>
      
    </div>
  )
}