import React from 'react';
import './Map.scss';

const Map = () => {
  return (
    <div className='map container'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092231792324!2d13.372469776926433!3d52.507932872058056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1697195105480!5m2!1sru!2sde'
        width='100%'
        height='450'
        style={{ border: '0' }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default Map;

