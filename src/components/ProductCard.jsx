import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

const ProductCard = ({img, title, kalibri, kg, dad}) => {

  const { t } = useTranslation();

  useEffect(()=>{
		Aos.init();
	},[])

  return (
    <>
    <div className='product-card' data-aos="fade-up">
        <div className='photo'>
            <img src={img} alt="error" />
        </div>
        <div className='card-title'>
            <h1>{title}</h1>
        </div>
        <div className='card-about'>
            <p>{t('productcard.1p1')}:<span>{kalibri}</span></p>
            <p>{t('productcard.2p1')}:<span>{kg}</span></p>
            <p>{t('productcard.3p1')}:<span>{dad}</span></p>
        </div>
    </div>
    </>
  )
}

export default ProductCard