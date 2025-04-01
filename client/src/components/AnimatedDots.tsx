import { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  color: string;
  connections: number[];
}

const AnimatedDots = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number | null>(null);
  const numDots = 120; // Increased number of dots
  const connectionDistance = 150; // Maximum distance for connecting dots
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Generate a glowing color
  const getRandomColor = () => {
    const colors = [
      'rgba(255, 255, 255, 0.8)',
      'rgba(180, 124, 255, 0.8)',
      'rgba(138, 43, 226, 0.8)',
      'rgba(120, 220, 255, 0.8)',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Initialize dots with random positions and velocities
  const initializeDots = () => {
    if (!containerRef.current) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const dots: Dot[] = [];
    for (let i = 0; i < numDots; i++) {
      dots.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1, // Size between 1-4px
        vx: (Math.random() - 0.5) * 0.6, // Slightly faster
        vy: (Math.random() - 0.5) * 0.6, // Slightly faster
        opacity: Math.random() * 0.7 + 0.3, // Opacity between 0.3-1.0
        color: getRandomColor(),
        connections: [],
      });
    }
    
    // Calculate initial connections
    for (let i = 0; i < dots.length; i++) {
      const connections: number[] = [];
      for (let j = 0; j < dots.length; j++) {
        if (i !== j) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < connectionDistance) {
            connections.push(j);
            if (connections.length >= 3) break; // Limit connections per dot
          }
        }
      }
      dots[i].connections = connections;
    }
    
    dotsRef.current = dots;
    setDimensions({ width, height });
  };

  // Update dot positions
  const updateDots = () => {
    if (!containerRef.current) return;
    
    const { width, height } = dimensions;
    
    dotsRef.current = dotsRef.current.map(dot => {
      let { x, y, vx, vy, size, opacity, color, connections } = dot;
      
      // Update position
      x += vx;
      y += vy;
      
      // Bounce off edges
      if (x < 0 || x > width) {
        vx = -vx;
        x = x < 0 ? 0 : width;
      }
      
      if (y < 0 || y > height) {
        vy = -vy;
        y = y < 0 ? 0 : height;
      }
      
      // Random slight velocity changes to make movement more organic
      if (Math.random() < 0.02) {
        vx += (Math.random() - 0.5) * 0.2;
        vy += (Math.random() - 0.5) * 0.2;
        
        // Limit max speed
        const speed = Math.sqrt(vx * vx + vy * vy);
        if (speed > 1.5) {
          vx = (vx / speed) * 1.5;
          vy = (vy / speed) * 1.5;
        }
      }
      
      // Randomly change opacity for pulsing effect
      if (Math.random() < 0.03) {
        opacity = Math.random() * 0.7 + 0.3;
        size = Math.random() * 3 + 1; // Dynamically change size
      }
      
      // Occasionally change color
      if (Math.random() < 0.001) {
        color = getRandomColor();
      }
      
      return { ...dot, x, y, vx, vy, opacity, size, color };
    });
    
    // Update connections based on new positions
    if (Math.random() < 0.05) { // Only recalculate connections occasionally for performance
      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const connections: number[] = [];
        for (let j = 0; j < dots.length; j++) {
          if (i !== j) {
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < connectionDistance) {
              connections.push(j);
              if (connections.length >= 3) break; // Limit connections per dot
            }
          }
        }
        dots[i].connections = connections;
      }
    }
    
    // Request next animation frame
    rafRef.current = requestAnimationFrame(updateDots);
  };

  // Initialize animation on mount
  useEffect(() => {
    initializeDots();
    rafRef.current = requestAnimationFrame(updateDots);
    
    // Handle window resize
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      initializeDots();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black"
      style={{
        background: 'radial-gradient(circle at center, rgba(20,20,40,1) 0%, rgba(0,0,0,1) 80%)'
      }}
    >
      {/* Draw connections first so they appear behind dots */}
      <svg className="absolute inset-0 w-full h-full">
        {dotsRef.current.map(dot => (
          dot.connections.map(connectionId => {
            const connectedDot = dotsRef.current[connectionId];
            return (
              <line
                key={`${dot.id}-${connectionId}`}
                x1={dot.x}
                y1={dot.y}
                x2={connectedDot.x}
                y2={connectedDot.y}
                stroke={dot.color}
                strokeWidth="0.5"
                strokeOpacity={(1 - Math.sqrt(
                  Math.pow(dot.x - connectedDot.x, 2) + 
                  Math.pow(dot.y - connectedDot.y, 2)
                ) / connectionDistance) * 0.5}
              />
            );
          })
        ))}
      </svg>
      
      {/* Draw the dots */}
      {dotsRef.current.map(dot => (
        <animated.div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            transform: `translate3d(${dot.x}px, ${dot.y}px, 0)`,
            opacity: dot.opacity,
            background: dot.color,
            boxShadow: `0 0 ${dot.size * 2}px ${dot.color}`,
          }}
        />
      ))}
      
      {/* Overlay grid pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(100,100,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </div>
  );
};

export default AnimatedDots;
