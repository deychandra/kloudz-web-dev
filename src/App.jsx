import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Industries = lazy(() => import('./pages/Industries'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service pages
const SoftwareDevelopment = lazy(() => import('./pages/services/SoftwareDevelopment'));
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const AIAutomation = lazy(() => import('./pages/services/AIAutomation'));

// Hiring pages
const ContractHiring = lazy(() => import('./pages/hiring/ContractHiring'));
const DedicatedDevelopers = lazy(() => import('./pages/hiring/DedicatedDevelopers'));

// Legal pages
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// Loading component
function PageLoader() {
          return (
                    <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50">
                              <div className="relative">
                                        <div className="w-16 h-16 border-4 border-primary/20 rounded-full"></div>
                                        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
                              </div>
                    </div>
          );
}

// Animated routes wrapper
function AnimatedRoutes() {
          const location = useLocation();

          return (
                    <AnimatePresence mode="wait">
                              <Routes location={location} key={location.pathname}>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/contact" element={<Contact />} />
                                        <Route path="/case-studies" element={<CaseStudies />} />
                                        <Route path="/blog" element={<Blog />} />
                                        <Route path="/blog/:slug" element={<BlogPost />} />
                                        <Route path="/industries" element={<Industries />} />

                                        {/* Service routes */}
                                        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
                                        <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                                        <Route path="/services/ai-automation" element={<AIAutomation />} />

                                        {/* Hiring routes */}
                                        <Route path="/hiring/contract-hiring" element={<ContractHiring />} />
                                        <Route path="/hiring/dedicated-developers" element={<DedicatedDevelopers />} />

                                        {/* Legal pages */}
                                        <Route path="/privacy" element={<Privacy />} />
                                        <Route path="/terms" element={<Terms />} />

                                        {/* 404 fallback */}
                                        <Route path="*" element={<NotFound />} />
                              </Routes>
                    </AnimatePresence>
          );
}

function App() {
          return (
                    <Router>
                              <Layout>
                                        <Suspense fallback={<PageLoader />}>
                                                  <AnimatedRoutes />
                                        </Suspense>
                              </Layout>
                    </Router>
          );
}

export default App;
