import React from 'react';

const NotFoundPage = () => {
  const styles = {
    notFoundPage: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#535353',
    },
    notFoundTitle: {
      fontSize: '10vw',
      fontWeight: 'bold',
      backgroundImage: 'linear-gradient(to right, #F9BF12, #E2FF31)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      margin: 0,
      padding: 0,
    },
    notFoundMessage: {
      fontSize: '3vw',
      textAlign: 'center',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.notFoundPage}>
      <h1 style={styles.notFoundTitle}>404</h1>
      <p style={styles.notFoundMessage}>Page not found</p>
    </div>
  );
};

export default NotFoundPage;
