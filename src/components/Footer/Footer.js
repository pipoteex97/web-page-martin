import React from 'react'

import './Footer.css';
import { Button } from "../Button";
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

export const Footer = () => {
    return (
        <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Registrate ahora y obtener no te arrepentis mas
        </p>
        <p className='footer-subscription-text'>
          Podes suscribirte cuando quieras
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Suscribite</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre nosotros</h2>
            <Link to='/sign-up'>Como trabajamos?</Link>
            <Link to='/'>Testimonios</Link>
            <Link to='/'>Carreras</Link>
            <Link to='/'>Investigaciones</Link>
            <Link to='/'>Terminos de servicio</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Suporte</Link>
            <Link to='/'>Destinatarios</Link>
            <Link to='/'>Sponsors</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Mira nuestros videos</Link>
            <Link to='/'>Auspiciantes</Link>
            <Link to='/'>Agencias</Link>
            <Link to='/'>Influencias</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              Martin Martinez
            </Link>
          </div>
          <small className='website-rights'>TINCHO © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '/'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
    )
}
