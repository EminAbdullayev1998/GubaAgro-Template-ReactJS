import React, { useEffect } from "react";
import about2 from "../img/about2.jpg";
import about3 from "../img/about3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import BackToTop from "react-back-to-top";
import { useTranslation } from "react-i18next";

const About = () => {
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
			<section className="title-about">
				<div className="layer">
					<div className="text">
						<h1>{t("about.1h1")}</h1>
					</div>
				</div>
			</section>

			<section className="about-section">
				<div className="main-box">
					<div className="video-box" data-aos="fade-right">
						<iframe
							width="100%"
							height="400"
							src="https://www.youtube.com/embed/PE6JX1lLHCA"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen></iframe>
					</div>
					<div className="text-box" data-aos="fade-left">
						<div className="title">
							<h1>
								<i class="fa-solid fa-apple-whole"></i> {t("about.1h1")}
							</h1>
						</div>
						<div className="text">
							<p>{t("about.1p")}</p>
							<p>{t("about.2p")}</p>
							<p>{t("about.3p")}</p>
						</div>
					</div>
				</div>
			</section>

			<section className="about2-section">
				<div className="hero-box">
					<div className="part1">
						<div className="text" data-aos="fade-right">
							<div className="title">
								<h1>
									<i class="fa-solid fa-eye"></i> {t("about.2h1")}
								</h1>
							</div>
							<div className="words-box">
								<p>{t("about.4p")}</p>
								<p>{t("about.5p")}</p>
								<p>{t("about.6p")}</p>
							</div>
						</div>
						<div className="photo-box" data-aos="fade-left">
							<div className="photo">
								<img src={about2} alt="error" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="about3-section">
				<div className="hero-box">
					<div className="text-box" data-aos="fade-left">
						<div className="title">
							<h1>
								<i class="fa-solid fa-clipboard-list"></i> {t("about.3h1")}
							</h1>
						</div>
						<div className="text">
							<p>{t("about.7p")}</p>
							<p>{t("about.8p")}</p>
							<p>{t("about.9p")}</p>
						</div>
					</div>
					<div className="photo-box" data-aos="fade-right">
						<div className="photo">
							<img src={about3} alt="error" />
						</div>
					</div>
				</div>
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

export default About;
