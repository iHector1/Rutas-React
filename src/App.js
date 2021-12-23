import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import UserPage from './pages/UserPage'
import UsersPage from './pages/UsersPage'
import Dashboard from './pages/Dashboard';
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
