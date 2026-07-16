import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './styles/index.css';
// Design System — single source of truth for tokens + components.
import '@steschoch/digital-pampas-ds/globals.css';
import '@steschoch/digital-pampas-ds/styles.css';
import {
  Nav,
  Hero,
  Problem,
  WhatWeDontDo,
  HowWeBuildIt,
  Proof,
  WaysToWork,
  WhoYouWorkWith,
  FinalCTA,
  Footer,
  PageLayout,
} from '@steschoch/digital-pampas-ds';

import BlogListPage from './pages/BlogListPage/BlogListPage';
import BlogPostPage from './pages/BlogPostPage/BlogPostPage';
import CaseStudiesPage from './pages/CaseStudiesPage/CaseStudiesPage';
import CaseStudyPage from './pages/CaseStudyPage/CaseStudyPage';
import PreviewPage from './pages/PreviewPage/PreviewPage';

function HomePage() {
  const { pathname } = useLocation();
  return (
    <>
      <Nav pathname={pathname} />
      <main>
        <Hero />
        <Problem />
        <WhatWeDontDo />
        {/* HowWeBuildIt renders its own <section> tags with id="process" and id="how-it-works" */}
        <HowWeBuildIt />
        {/* Proof renders its own <section id="cases"> */}
        <Proof />
        {/* WaysToWork renders its own <section id="ways"> */}
        <WaysToWork />
        {/* WhoYouWorkWith renders its own <section id="who-you-work-with"> */}
        <WhoYouWorkWith photoSrc="/leandro-brufal.jpg" />
        {/* FinalCTA renders its own <section id="book-call"> */}
        <FinalCTA />
      </main>
      {/* Footer renders its own <footer id="about"> */}
      <Footer
        portalHref="https://digital-pampas-portal.vercel.app/"
        emailHref="/#book-call"
        founder={{
          name: 'Leandro Brufal',
          role: 'Founder & GTM Engineer',
          linkedinHref: 'https://www.linkedin.com/in/lbrufal/',
          photoSrc: '/leandro-brufal.jpg',
        }}
      />
    </>
  );
}

/** Wraps routed pages with the DS PageLayout, injecting the current path into Nav. */
function Shell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return <PageLayout pathname={pathname}>{children}</PageLayout>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/blog"
          element={
            <Shell>
              <BlogListPage />
            </Shell>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Shell>
              <BlogPostPage />
            </Shell>
          }
        />
        <Route
          path="/case-studies"
          element={
            <Shell>
              <CaseStudiesPage />
            </Shell>
          }
        />
        <Route
          path="/case-studies/:slug"
          element={
            <Shell>
              <CaseStudyPage />
            </Shell>
          }
        />
        {/* Network animation preview — /preview/1, /preview/2, /preview/3 */}
        <Route path="/preview/:v" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
