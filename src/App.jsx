import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import {  Home, Level001, Level002} from "./pages"

export default function App() {
  return (
    <div>
      Hallo
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/level1" element={<Level001 />}></Route>
          <Route path="/level2" element={<Level002 />}></Route>
        </Routes>
    </BrowserRouter>
      
    </div>
  )
}