import React from 'react'
import footerLogo from '../img/100.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Footer = () => {

    const { t } = useTranslation();

  return (
    <>
    <footer>
        <section className='footer-top'>
            <div className='main-box'>
                <div className='logo'>
                   <NavLink to='/'><img src={footerLogo} alt="error" /></NavLink>
                </div>
                <div className='nav-1'>
                    <ul>
                        <NavLink to='/'><li>{t('footer.1li')}</li></NavLink>
                        <NavLink to='/about'><li>{t('footer.2li')}</li></NavLink>
                        <NavLink to='/products'><li>{t('footer.3li')}</li></NavLink>
                    </ul>
                </div>
                <div className='nav-2'>
                    <ul>
                        <NavLink to='/news'><li>{t('footer.4li')}</li></NavLink>
                        <NavLink to='/galery'><li>{t('footer.5li')}</li></NavLink>
                        <NavLink to='/contact'><li>{t('footer.6li')}</li></NavLink>
                    </ul>
                </div>
                <div className='subscribe'>
                    <div className='input'>
                        <input type="email" placeholder='Email'/>
                        <button><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </section>

        <section className='footer-alt'>
            <div className='hero-box'>
                <a href='https://www.instagram.com/' target='blank'>
                <div className='circle'>
                    <i className="fa-brands fa-instagram"></i>
                </div>
                </a>
                <a href='https://web.whatsapp.com/' target='blank'>
                <div className='circle'>
                   <i className="fa-brands fa-whatsapp"></i>
                </div>
                </a>
                <a href='https://www.facebook.com/' target='blank'>
                <div className='circle'>
                   <i className="fa-brands fa-facebook-f"></i>
                </div>
                </a>
            </div>
        </section>
    </footer>
    </>
  )
}

export default Footer