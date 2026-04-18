import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/home'
import OurStoryPage from './pages/our-story'
import TeamPage from './pages/team'
import DataRequestPage from './pages/data-request'
import PartnerWithUsPage from './pages/partner-with-us'
import FormSuccessPage from './pages/form-success'
import NotFoundPage from './pages/404'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/data-request" element={<DataRequestPage />} />
        <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
        <Route path="/success" element={<FormSuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}
