import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import AiGeneratorPanel from './components/AiGeneratorPanel';
import FullMockTest from './components/FullMockTest';
import ProfileManager from './components/ProfileManager';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: "Admin Candidate", email: "admin@example.com", isAdmin: true });
  }

  const ProtectedRoute = ({ children }) => {
    if (!user) return <Navigate to="/login" replace />;
    return children;
  }

  return (
    <Router>
      <div className="app-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {user && (
          <nav className="glass-card mb-8 flex justify-between items-center" style={{ padding: '1rem 2rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem', background: 'linear-gradient(to right, #60a5fa, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Welcome, {user.name}
            </h2>
            <div className="flex gap-4">
              <Link to="/"><button className="btn btn-secondary">Dashboard</button></Link>
              <Link to="/ai-generator"><button className="btn btn-primary" style={{ background: 'linear-gradient(to right, #a78bfa, #8b5cf6)' }}>AI Generation Lab</button></Link>
              <button className="btn btn-outline" onClick={() => setUser(null)}>Logout</button>
            </div>
          </nav>
        )}

        <Routes>
          <Route path="/login" element={
            user ? <Navigate to="/" /> : (
              <div className="flex justify-center items-center" style={{ minHeight: '70vh' }}>
                <div className="glass-container w-full" style={{ maxWidth: '400px' }}>
                  <h2 className="text-center mb-8">Platform Login</h2>
                  <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                      <label>Email</label>
                      <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', marginTop: '0.5rem' }} />
                    </div>
                    <div>
                      <label>Password</label>
                      <input type="password" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', marginTop: '0.5rem' }} />
                    </div>
                    <div className="text-right">
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', cursor: 'pointer' }}>Forgot Password?</span>
                    </div>
                    <button type="submit" className="btn btn-primary w-full mt-4">Login</button>
                    <p className="text-center mt-4" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Any email/password works for demo.</p>
                  </form>
                </div>
              </div>
            )
          } />

          <Route path="/ai-generator" element={<ProtectedRoute><AiGeneratorPanel /></ProtectedRoute>} />

          <Route path="/tests" element={
            <ProtectedRoute>
              <div className="text-center mb-8">
                <h2>5 Comprehensive End-to-End Tests</h2>
                <p>Each contains: 100 WATs, 4 Picture Stories, 4 Pointer Stories, 4 English SCTs, 4 Urdu SCTs, Essay & Lecturate.</p>
              </div>
              <FullMockTest />
            </ProtectedRoute>
          } />

          <Route path="/profile" element={<ProtectedRoute><ProfileManager /></ProtectedRoute>} />

          <Route path="/" element={
            <ProtectedRoute>
              <div className="grid grid-cols-2 gap-8">
                <div className="glass-card text-center py-8">
                  <h3 style={{ color: 'var(--accent-primary)' }}>Mock Testing Engine</h3>
                  <p className="mt-2 color-text-secondary mb-4">Take full simulations based on ISSB standards and get AI assessment.</p>
                  <Link to="/tests"><button className="btn btn-primary mt-4">Take Full Mock Test</button></Link>
                </div>
                <div className="glass-card text-center py-8">
                  <h3 style={{ color: 'var(--success)' }}>Self Incidents & Traits</h3>
                  <p className="mt-2 color-text-secondary mb-4">Manage unforgettable, sorrowful & happiest moments. Track Merits/Demerits.</p>
                  <Link to="/profile"><button className="btn btn-secondary mt-4">Manage Life Profile</button></Link>
                </div>
              </div>
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
