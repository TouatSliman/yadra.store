import React from 'react';

function Map() {
  // Paste the URL you copied from Google Maps here.
  // This example URL is for the location you had in your previous code.
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203.75395813782046!2d-0.6221625208854312!3d35.20489145529424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7f0155d8d6f4ab%3A0x5ecd4fb9dc35d487!2z2YXZg9iq2KjYqSDYp9mE2YrYp9iz2YXZitmGIGxpYnJhaXJpZSBqYXNtaW4!5e0!3m2!1sen!2sdz!4v1762960366769!5m2!1sen!2sdz";

  return (
    <div style={{ padding: ' 1rem 0', textAlign: 'center' }}>
      <div style={{
        margin: '0 auto',
        border: '2px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <iframe
          src={mapSrc}
          width="100%"  
          height="500"
          style={{ border: 0 }} /* Important to remove default iframe border */
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Yadra.Store Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
