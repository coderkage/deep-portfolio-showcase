
import { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function AnimatedBackground() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Create initial nodes
    const initialNodes: Node[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setNodes(initialNodes);

    const animate = () => {
      setNodes(prevNodes => 
        prevNodes.map(node => {
          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          let newVx = node.vx;
          let newVy = node.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) newVx = -newVx;
          if (newY <= 0 || newY >= window.innerHeight) newVy = -newVy;

          return {
            ...node,
            x: Math.max(0, Math.min(window.innerWidth, newX)),
            y: Math.max(0, Math.min(window.innerHeight, newY)),
            vx: newVx,
            vy: newVy,
          };
        })
      );
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const getConnections = () => {
    const connections: { from: Node; to: Node; distance: number }[] = [];
    const maxDistance = 150;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2)
        );
        
        if (distance < maxDistance) {
          connections.push({
            from: nodes[i],
            to: nodes[j],
            distance,
          });
        }
      }
    }
    
    return connections;
  };

  const connections = getConnections();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ filter: 'blur(0.5px)' }}
      >
        {/* Render connections */}
        {connections.map((connection, index) => {
          const opacity = Math.max(0.05, 1 - connection.distance / 150);
          return (
            <line
              key={`connection-${index}`}
              x1={connection.from.x}
              y1={connection.from.y}
              x2={connection.to.x}
              y2={connection.to.y}
              stroke="currentColor"
              strokeWidth="0.5"
              opacity={opacity * 0.3}
              className="text-primary/20"
            />
          );
        })}

        {/* Render nodes */}
        {nodes.map((node) => (
          <circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r="1.5"
            fill="currentColor"
            className="text-primary/40"
            opacity="0.6"
          />
        ))}

        {/* Add some larger pulsing nodes */}
        {nodes.slice(0, 5).map((node) => (
          <circle
            key={`pulse-${node.id}`}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-accent/30 animate-ping"
            style={{ animationDuration: '3s', animationDelay: `${node.id * 0.5}s` }}
          />
        ))}
      </svg>

      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-30"></div>
    </div>
  );
}
