import React, { useEffect } from "react";
import contactphoto from "../img/contact.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import BackToTop from "react-back-to-top";
import { useTranslation } from "react-i18next";

const Contact = () => {
	const { t } = useTranslation();

	useEffect(() => {
		Aos.init();
	}, []);

	useEffect(() => {
		document.querySelector(".back-to-up-default-text span").innerHTML =
			'<i class="fa-solid fa-arrow-up"></i>';
	});

	return (
		<>
			<section className="title-contact">
				<div className="layer">
					<div className="text">
						<h1>{t("contact.h1")}</h1>
					</div>
				</div>
			</section>

			<section className="adresses">
				<div className="hero-box" data-aos="zoom-in">
					<div className="telephone-box">
						<div className="logo">
							<div className="circle">
								<i className="fa-solid fa-phone"></i>
							</div>
						</div>
						<div className="title">
							<h1>{t("contact.2h1")}</h1>
						</div>
						<div className="number">
							<p>+994 12 310 02 40</p>
						</div>
					</div>

					<div className="adress-box">
						<div className="logo">
							<div className="circle">
								<i className="fa-solid fa-location-dot"></i>
							</div>
						</div>
						<div className="title">
							<h1>{t("contact.3h1")}</h1>
						</div>
						<div className="adress">
							<p>
								Nərimanov rayonu, Z.Bünyadov pr. 1965, bina 5, mərtəbə 3 Bakı, AZ1106, Azərbaycan
							</p>
						</div>
					</div>

					<div className="email-box">
						<div className="logo">
							<div className="circle">
								<i className="fa-solid fa-envelope"></i>
							</div>
						</div>
						<div className="title">
							<h1>Email</h1>
						</div>
						<div className="number">
							<p>info@gubagro.az</p>
						</div>
					</div>
				</div>
			</section>

			<section className="form-section">
				<div className="main-box">
					<div className="photo" data-aos="fade-right">
						<img src={contactphoto} alt="error" />
					</div>
					<div className="form-box" data-aos="fade-left">
						<div className="text">
							<h1>{t("contact.4h1")}</h1>
						</div>
						<div className="inputs-group">
							<div className="input-name">
								<input type="text" placeholder="Ad və Soyad" />
							</div>
							<div className="input-email">
								<input type="email" placeholder="Email" />
							</div>
						</div>
						<div className="meesage-box">
							<textarea placeholder="Message..."></textarea>
						</div>
						<div className="button-box">
							<button>
								<i className="fa-solid fa-apple-whole"></i> {t("contact.5h1")}
								<i className="fa-solid fa-arrow-right"></i>
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="map-section">
				<iframe
					width="100%"
					height="400"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
					src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Chinar%20Park%201/25%20%C6%8Fhm%C9%99d%20R%C9%99c%C9%99bli,%20Bak%C4%B1+(GubaAgro)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
					<a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a>
				</iframe>
			</section>

			<BackToTop
				mainStyle={{
					width: "100%",
					height: "100%",
					background: "url(...)",
				}}
				percentStyle={{
					width: "100%",
					height: "100%",
				}}
				animate="rotate"
				offsetTop={0}
				isPercent={false}
			/>
		</>
	);
};

export default Contact;
