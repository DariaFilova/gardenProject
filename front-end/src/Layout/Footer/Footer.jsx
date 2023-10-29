import React from 'react';

import Map from '../../features/Map/Map';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Footer.scss';
import './media.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__wrapper container'>
        <div className='footer__contacts'>
          <div className='title'>Contacts</div>
          <div className='footer__number'>+49 999 999 9999</div>
          <div className='footer__social'>
            <div className='footer__social_instagram'>
              <WhatsAppIcon fontSize='large' />
              <p>Instagram</p>
            </div>
            <div className='footer__social_whatsapp'>
              <InstagramIcon fontSize='large' />
              <p>WhatsApp</p>
            </div>
          </div>
        </div>

        <div className='footer__address'>
          <div className='title'>Address </div>
          <div className='footer__address_street'>
            Linkstraße 2, 8 OG, 10785,
            <br />
            Berlin, Deutschland
          </div>
          <div className='footer__address_working_hours'>
            <p className='footer__address_working_hours_title'>Working hours</p>
            <p className='footer__address_working_hours_subtitle'>
              24 hours a day
            </p>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Footer;

