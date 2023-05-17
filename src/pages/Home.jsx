import React, { useEffect } from "react";
import { HomeCategory } from "../components/HomeCategory";
import ProductCard from "../components/ProductCard";
import apple1 from "../img/apple1.jpg";
import apple2 from "../img/apple2.jpg";
import apple3 from "../img/apple3.jpg";
import apple4 from "../img/apple4.jpg";
import videobg from "../img/gubaagro.mp4";
import logo100 from '../img/100.png'
import photo from '../img/newscard.jpg'
import HomeOwlCarousel from "../components/HomeOwlCarousel";
import NewsCard from "../components/NewsCard";
import Aos from "aos";
import "aos/dist/aos.css";
import BackToTop from 'react-back-to-top';
import { useTranslation } from "react-i18next";
import '../config/i18n'

const Home = () => {

	const { t } = useTranslation();

	useEffect(()=>{
		Aos.init();
	},[])

	useEffect(()=>{
		document.querySelector('.back-to-up-default-text span').innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
	})

	return (
		<>
			<section className="home">
				<video autoPlay muted playsInline loop>
					<source src={videobg} type="video/mp4" />
				</video>

				<div className="layer"></div>

				<div className="text-box">
					<div className="title">
						<h1>GUBA AGRO</h1>
					</div>
					<div className="about">
						<p>
							{t("home.about")}
						</p>
					</div>
					<div className="button-box">
						<button>
							<i className="fa-solid fa-apple-whole"></i> {t('home.button1')}
							<i className="fa-solid fa-arrow-right"></i>
						</button>
					</div>
				</div>
			</section>

			<section className="products">
				<div className="hero-box">
					<div className="title">
						<h1>{t('home.1h1')}</h1>
					</div>
					<div className="list">
						<ProductCard
							img={apple1}
							title='Alma "Buckeye Gala"'
							kalibri="70-80 mm"
							kg="140-160 qram"
							dad="şirin və bərk"
						/>
						<ProductCard
							img={apple2}
							title='Alma "Granny Smith Challenger"'
							kalibri="75+"
							kg="140-160 qram"
							dad="kəmturş və bərk"
						/>
						<ProductCard
							img={apple3}
							title='Alma "Golden Delicious"'
							kalibri="70-80 mm"
							kg="140-170 qram"
							dad="şirin"
						/>
						<ProductCard
							img={apple4}
							title='Alma "Galaval"'
							kalibri="65-75 mm"
							kg="130-150 qram"
							dad="şirin"
						/>
					</div>
				</div>

				<div className="path1"></div>
			</section>

			<section className="aboutUs">
				<div className="layer">
					<div className="main-box" data-aos="zoom-in">
						<div className="aboutUs-title">
							<h1>GUBA AGRO</h1>
						</div>
						<div className="hero-box">
							<div className="main-div">
								<HomeCategory />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="carousel">
				<div className="main-box">
					<div className="title">
						<h1>GUBA AGRO {t('home.2h1')}</h1>
					</div>
					<div className="carousel-box">
						<HomeOwlCarousel />
					</div>

					<div className="button-box">
					    <button>
							<i className="fa-solid fa-apple-whole"></i> {t('home.button1')}
							<i className="fa-solid fa-arrow-right"></i>
						</button>
					</div>
				</div>
			</section>

			<section className="slogan">
				<div className="logo" >
					<img src={logo100} alt="error" data-aos="zoom-in-up"/>
					<div className="layer"></div>
				</div>
				<div className="text-box" data-aos="zoom-in-up">
					<div className="hero-box">
						<div className="text">
							<p>{t('home.1p1')}</p>
						</div>
						<div className="button-box">
						    <button>
						    	<i className="fa-solid fa-apple-whole"></i> {t('home.button1')}
						    	<i className="fa-solid fa-arrow-right"></i>
						    </button>
						</div>
					</div>
				</div>
			</section>

			<section className="news">
				<div className="main-box">
					<div className="news-title">
						<h1>{t('home.3h1')}</h1>
					</div>
					<div className="cards-list">
						<NewsCard 
						  img={photo}
						  title='Zəfər Günü'
						  time='5 May 2023'
						  text='Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.'
						/>
						<NewsCard 
						   img={photo}
						   title='Zəfər Günü'
					       time='5 May 2023'
						   text='Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.'
						/>
						<NewsCard 
						  img={photo}
						  title='Zəfər Günü'
						  time='5 May 2023'
						  text='Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.'
						/>
					</div>
					<div className="button-box">
					    <button>
						    <i className="fa-solid fa-apple-whole"></i> {t('home.button2')}
						    <i className="fa-solid fa-arrow-right"></i>
						</button>
					</div>
				</div>
			</section>

			<BackToTop 
			    mainStyle={{
					width:'100%',
					height:'100%',
					background:'url(...)'
				}}
				percentStyle={{
					width:'100%',
					height:'100%',
				}}
				animate='rotate'
				offsetTop={0}
				isPercent={false}
				step={20}
			/>
		</>
	);
};

export default Home;
