import styles from '../styles/GridBackground.module.css';
import React, { useEffect, useState } from 'react';

const GridBackground = () => {
  const [highlighters, setHighlighters] = useState([]);

  useEffect(() => {
    const createHighlighters = () => {
      const newHighlighters = [];
      for (let i = 0; i < 3; i++) { // Create 5 highlighters
        const randomX = Math.floor(Math.random() * 40) * 50; // Align highlighter position with grid (50px intervals)
        const randomY = Math.floor(Math.random() * (window.innerHeight / 50)) * 50;
        const randomDelay = Math.random() * 5; // Random delay for appearance
        newHighlighters.push({
          id: i,
          xPosition: randomX,
          yPosition: randomY,
          delay: randomDelay
        });
      }
      setHighlighters(prevHighlighters => [...prevHighlighters, ...newHighlighters]);
    };

    createHighlighters();
    const interval = setInterval(createHighlighters, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.grid}>
      {highlighters.map((highlighter) => (
        <div
          key={highlighter.id}
          className={styles.highlighter}
          style={{ 
            left: `${highlighter.xPosition}px`, // Align highlighter with the grid
            top: `${highlighter.yPosition}px`,
            animationDelay: `${highlighter.delay}s` // Add random delay to each highlighter
          }}
        />
      ))}
    </div>
  );
};

export default GridBackground;


