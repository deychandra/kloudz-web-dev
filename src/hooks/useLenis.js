import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Custom hook for smooth scrolling with Lenis
 * Provides a premium scrolling experience
 */
export function useLenis() {
          const lenisRef = useRef(null);

          useEffect(() => {
                    // Initialize Lenis with premium settings
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

                    lenisRef.current = lenis;

                    // Animation frame loop
                    function raf(time) {
                              lenis.raf(time);
                              requestAnimationFrame(raf);
                    }

                    requestAnimationFrame(raf);

                    // Cleanup
                    return () => {
                              lenis.destroy();
                              lenisRef.current = null;
                    };
          }, []);

          return lenisRef;
}

/**
 * Scroll to a specific element or position
 */
export function scrollTo(target, options = {}) {
          if (window.lenis) {
                    window.lenis.scrollTo(target, {
                              offset: 0,
                              duration: 1.2,
                              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                              ...options,
                    });
          }
}

export default useLenis;
