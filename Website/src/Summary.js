import React, { useState } from 'react';

const MicrophoneButton = () => {
  const [isActive, setIsActive] = useState(false);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    microphone: {
      backgroundColor: isActive ? 'red' : 'pink',
      borderRadius: '50%',
      width: '80px',
      height: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      position: 'relative',
      left: isActive ? '-410px' : 0
    },
    microphoneIcon: {
      color: isActive ? 'white' : 'black',
      fontSize: '40px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.microphone} onClick={() => setIsActive(!isActive)}>
        <i className="fas fa-microphone" style={styles.microphoneIcon}></i>
      </div>
    </div>
  );
};

export default MicrophoneButton;
