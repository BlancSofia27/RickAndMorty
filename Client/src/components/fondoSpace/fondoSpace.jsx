import React from 'react';
import './fondoSpace.css';
import '../../img/Espacio.mp4'

const VideoBackground = () => {
  return (
    <video className='video-background' autoPlay muted loop>
      <source src='Espacio.mp4' type='video/mp4' />
    </video>
  );
};

export default VideoBackground;
