import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import SettingsPage from '../Pages/SettingsPage'
import ReportPage from '../Pages/ReportPage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/report" element={<ReportPage />} />
    </Routes>
  )
}

export default AppRouter