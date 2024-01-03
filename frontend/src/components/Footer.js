import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            İletişim        
        </p>
        <p className='footer-subscription-text'>
          Her zaman ulaşabilirsiniz.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder=' Email'
            />
            <Button buttonStyle='btn--outline'>Gönder</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Hakkımızda</h2>
            <Link to='/'>İletişim</Link>
            <Link to='/'>destek</Link>
          </div>
          
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Sosya Medya</h2>
            <Link to='https://www.instagram.com/_mustafakaratas0/'target='_blank'>Instagram</Link>
            <Link to='https://www.linkedin.com/in/mustafa-karata%C5%9F-657202221/'target='_blank'>LinkedIn</Link>
            
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              WOW
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>WOW © 2023</small>
          <div class='social-icons'>
            
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/mustafa-karata%C5%9F-657202221/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;