import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from '../common/ScrollProgress';
import AnimatedCursor from '../common/AnimatedCursor';

/**
 * Main layout wrapper with smooth scroll and page structure
 */
function Layout({ children }) {
          const location = useLocation();

          // Initialize Lenis smooth scroll
          useEffect(() => {
                    const lenis = new Lenis({
                              duration: 1.2,
                              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                              orientation: 'vertical',
                              gestureOrientation: 'vertical',
                              smoothWheel: true,
                              wheelMultiplier: 1,
                              touchMultiplier: 2,
                              infinite: false,
                    });

                    // Make lenis available globally
                    window.lenis = lenis;

                    function raf(time) {
                              lenis.raf(time);
                              requestAnimationFrame(raf);
                    }

                    requestAnimationFrame(raf);

                    return () => {
                              lenis.destroy();
                              window.lenis = null;
                    };
          }, []);

          // Scroll to top on route change
          useEffect(() => {
                    if (window.lenis) {
                              window.lenis.scrollTo(0, { immediate: true });
                    } else {
                              window.scrollTo(0, 0);
                    }
          }, [location.pathname]);

          return (
                    <div className="relative min-h-screen bg-dark-900 cursor-none">
                              {/* Custom Animated Cursor */}
                              <AnimatedCursor />

                              {/* Scroll progress indicator */}
                              <ScrollProgress />

                              {/* Navigation */}
                              <Header />

                              {/* Main content */}
                              <main className="relative">
                                        {children}
                              </main>

                              {/* Footer */}
                              <Footer />
                    </div>
          );
}

export default Layout;
