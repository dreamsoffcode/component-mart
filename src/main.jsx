import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Assignment1 from './components/assignment1.jsx'
import Assignment2 from './components/assignment2.jsx'
import Assignment3 from './components/assignment3.jsx'
import Assignment4 from './components/assignment4.jsx'
import Assignment5 from './components/assignment5.jsx'
import Assignment6 from './components/assignment6.jsx'
import Assignment7 from './components/assignment7.jsx'
import Landing from './components/landing.jsx'
import { RecoilRoot } from 'recoil'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/assignment1' element={<Assignment1 />}></Route>
        <Route path='/assignment2' element={<RecoilRoot><Assignment2 /></RecoilRoot>}></Route>
        <Route path='/assignment3' element={<Assignment3 />}></Route>
        <Route path='/assignment4' element={<Assignment4 />}></Route>
        <Route path='/assignment5' element={<Assignment5 />}></Route>
        <Route path='/assignment6' element={<Assignment6 />}></Route>
        <Route path='/assignment7' element={<Assignment7 />}></Route>
      </Routes>
    </BrowserRouter>
)
