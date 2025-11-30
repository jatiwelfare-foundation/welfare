import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Mission } from './pages/Mission';
import { Projects } from './pages/Projects';
import { Donate } from './pages/Donate';
import { Volunteer } from './pages/Volunteer';
import { Contact } from './pages/Contact';
import { AdminLogin } from './pages/AdminLogin';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mission" element={<Mission />} />
          <Route path="projects" element={<Projects />} />
          <Route path="donate" element={<Donate />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<AdminLogin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;