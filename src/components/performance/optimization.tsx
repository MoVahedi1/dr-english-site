'use client';

import { useEffect, useState, useRef } from 'react';

interface WebVitals {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export function PerformanceMonitoring() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measureWebVitals = () => {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
            // Send to analytics
            sendToAnalytics('FCP', entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        sendToAnalytics('LCP', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FID:', (entry as any).processingStart - entry.startTime);
          sendToAnalytics('FID', (entry as any).processingStart - entry.startTime);
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('CLS:', clsValue);
        sendToAnalytics('CLS', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigation.responseStart - navigation.requestStart;
      console.log('TTFB:', ttfb);
      sendToAnalytics('TTFB', ttfb);
    };

    // Send metrics to analytics
    const sendToAnalytics = (metric: string, value: number) => {
      // In production, send to your analytics service
      if (process.env.NODE_ENV === 'production') {
        // Example: gtag('event', metric, { value: Math.round(value) });
        console.log(`Analytics: ${metric} = ${value}`);
      }
    };

    // Run measurements
    if ('PerformanceObserver' in window) {
      measureWebVitals();
    }

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const resource = entry as PerformanceResourceTiming;
        if (resource.duration > 1000) { // Alert on slow resources
          console.warn(`Slow resource detected: ${resource.name} took ${resource.duration}ms`);
        }
      }
    });
    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => {
      resourceObserver.disconnect();
    };
  }, []);

  return null;
}

// Lazy loading utility
export function LazyLoadComponent({ 
  children, 
  fallback = <div>Loading...</div>,
  rootMargin = '50px'
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={elementRef}>
      {isVisible ? children : fallback}
    </div>
  );
}

// Image optimization utility
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
}

// Preload critical resources
export function PreloadResources() {
  useEffect(() => {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = '/fonts/inter.woff2';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Preload critical CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'preload';
    cssLink.href = '/css/critical.css';
    cssLink.as = 'style';
    document.head.appendChild(cssLink);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(cssLink);
    };
  }, []);

  return null;
}

// Service Worker registration for PWA capabilities
export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null;
}