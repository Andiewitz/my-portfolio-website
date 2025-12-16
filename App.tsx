import React, { Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy Load Sections for Code Splitting Performance Budget
// Using module extraction for named exports
const Hero = React.lazy(() => import('./components/Hero').then(module => ({ default: module.Hero })));
const Capabilities = React.lazy(() => import('./components/Capabilities').then(module => ({ default: module.Capabilities })));
const About = React.lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Projects = React.lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Contact = React.lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));

const LoadingFallback = () => (
  <div className="w-full h-96 flex items-center justify-center bg-sanity-black">
    <div className="w-1 h-12 bg-sanity-orange animate-pulse"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="relative z-10 bg-sanity-black">
          <Suspense fallback={<LoadingFallback />}>
            <Hero />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Capabilities />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;