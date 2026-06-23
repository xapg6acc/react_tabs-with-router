import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
  useNavigate,
} from 'react-router-dom';
import './App.scss';
import { TabsPage } from './TabsPage';
import { NotFound } from './NotFound';

const HashRedirect: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleHash = () => {
      const { hash } = window.location;

      if (hash.startsWith('#/')) {
        const targetPath = hash.slice(1);

        navigate(targetPath, { replace: true });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);

    return () => window.removeEventListener('hashchange', handleHash);
  }, [navigate]);

  return null;
};

const Home: React.FC = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Home page</h1>
    </div>
  </div>
);

const App: React.FC = () => (
  <Router>
    <HashRedirect />
    <div className="App">
      <nav className="navbar is-dark mb-4">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-start">
              <NavLink
                to="/"
                className={({ isActive }) => `navbar-item ${isActive ? 'is-active' : ''}`}
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/tabs"
                className={({ isActive }) => `navbar-item ${isActive ? 'is-active' : ''}`}
              >
                Tabs
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
