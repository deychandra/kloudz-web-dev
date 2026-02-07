import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Uses IntersectionObserver for performance
 */
export function useScrollAnimation(options = {}) {
          const ref = useRef(null);
          const [isVisible, setIsVisible] = useState(false);

          const {
                    threshold = 0.2,
                    rootMargin = '-50px',
                    triggerOnce = true,
          } = options;

          useEffect(() => {
                    const element = ref.current;
                    if (!element) return;

                    const observer = new IntersectionObserver(
                              ([entry]) => {
                                        if (entry.isIntersecting) {
                                                  setIsVisible(true);
                                                  if (triggerOnce) {
                                                            observer.unobserve(element);
                                                  }
                                        } else if (!triggerOnce) {
                                                  setIsVisible(false);
                                        }
                              },
                              {
                                        threshold,
                                        rootMargin,
                              }
                    );

                    observer.observe(element);

                    return () => {
                              if (element) {
                                        observer.unobserve(element);
                              }
                    };
          }, [threshold, rootMargin, triggerOnce]);

          return [ref, isVisible];
}

/**
 * Hook for parallax scroll effects
 */
export function useParallax(speed = 0.5) {
          const ref = useRef(null);
          const [offset, setOffset] = useState(0);

          useEffect(() => {
                    const handleScroll = () => {
                              if (!ref.current) return;

                              const rect = ref.current.getBoundingClientRect();
                              const scrolled = window.scrollY;
                              const elementTop = rect.top + scrolled;
                              const viewportHeight = window.innerHeight;

                              // Calculate parallax offset
                              const relativeScroll = scrolled - elementTop + viewportHeight;
                              const parallaxOffset = relativeScroll * speed;

                              setOffset(parallaxOffset);
                    };

                    window.addEventListener('scroll', handleScroll, { passive: true });
                    handleScroll();

                    return () => {
                              window.removeEventListener('scroll', handleScroll);
                    };
          }, [speed]);

          return [ref, offset];
}

/**
 * Hook to track scroll progress
 */
export function useScrollProgress() {
          const [progress, setProgress] = useState(0);

          useEffect(() => {
                    const handleScroll = () => {
                              const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                              const scrolled = window.scrollY;
                              const progress = scrollHeight > 0 ? scrolled / scrollHeight : 0;
                              setProgress(Math.min(1, Math.max(0, progress)));
                    };

                    window.addEventListener('scroll', handleScroll, { passive: true });
                    handleScroll();

                    return () => {
                              window.removeEventListener('scroll', handleScroll);
                    };
          }, []);

          return progress;
}

export default useScrollAnimation;
