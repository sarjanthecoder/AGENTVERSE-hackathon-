import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { LoadingScreen } from './components/ui/LoadingScreen';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const LiveHackathons = lazy(() => import('./pages/LiveHackathons'));
const Community = lazy(() => import('./pages/Community'));
const Founders = lazy(() => import('./pages/Founders'));
const Winners = lazy(() => import('./pages/Winners'));
const Prizes = lazy(() => import('./pages/Prizes'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>AgentVerse | Premier Hackathon Platform</title>
        <meta name="description" content="Join the ultimate hackathon platform. Build, innovate, and win prizes across Agentic AI, 3D AI, Voice AI, and more." />
      </Helmet>
      <HashRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="hackathons" element={<LiveHackathons />} />
              <Route path="community" element={<Community />} />
              <Route path="founders" element={<Founders />} />
              <Route path="winners" element={<Winners />} />
              <Route path="prizes" element={<Prizes />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;