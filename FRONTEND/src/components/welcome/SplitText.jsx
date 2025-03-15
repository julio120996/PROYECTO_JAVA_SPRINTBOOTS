import { useTrail } from '@react-spring/web';
// eslint-disable-next-line no-unused-vars
import { animated } from "@react-spring/web";
import React from 'react';

const SplitText = ({ text, className }) => {
  const letters = text.split('');

  const trail = useTrail(letters.length, {
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className={className}>
      {trail.map((style, index) => (
        <animated.span key={index} style={{ ...style, display: 'inline-block' }}>
          {letters[index]}
        </animated.span>
      ))}
    </div>
  );
};

export default SplitText;
