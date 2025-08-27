
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages (will be created in upcoming steps)
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import MembersPage from './pages/MembersPage';

import CommitteesPage from './pages/CommitteesPage';
// import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import RushPage from './pages/RushPage';

// MUST be default import:
import NavBar from './components/NavBar/NavBar';

import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <Router>
            <NavBar /> {/* NavBar can be outside Routes if it's always present */}
            <Routes>
                {/* Uncomment and update the HomePage import at the top */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/members" element={<MembersPage />} />
                <Route path="/committees" element={<CommitteesPage/>} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/rush" element={<RushPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;