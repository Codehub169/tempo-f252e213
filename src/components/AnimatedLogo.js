import { useEffect, useState } from 'react';
import LottiePlayer from 'react-lottie-player';

const AnimatedLogo = ({ width = 200, height = 200, className = '' }) => {
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/logo-animated.json') 
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setAnimationData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading animation data:', error);
        setIsLoading(false); // Ensure loading stops even on error
      });
  }, []);

  if (isLoading) {
    return (
      <div 
        style={{ width, height }} 
        className={`flex items-center justify-center text-neutral-darkest font-heading text-2xl ${className}`}
      >
        hueneu
      </div>
    );
  }

  if (!animationData) {
    // Fallback if data is null after loading attempt (e.g. fetch error)
    return (
      <div 
        style={{ width, height }} 
        className={`flex items-center justify-center text-neutral-darkest font-heading text-2xl ${className}`}
      >
        hueneu
      </div>
    );
  }

  return (
    <div className={className} style={{ width, height }}>
      <LottiePlayer
        loop={false} 
        animationData={animationData}
        play
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default AnimatedLogo;
