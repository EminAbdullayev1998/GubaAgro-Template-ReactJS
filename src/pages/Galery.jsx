import React, { useEffect } from "react";
import galleryimg1 from "../img/galleryimg1.jpg";
import galleryimg2 from "../img/galleryimg2.jpg";
import galleryimg3 from "../img/galleryimg3.jpg";
import galleryimg4 from "../img/galleryimg4.jpg";
import galleryimg5 from "../img/galleryimg5.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import BackToTop from "react-back-to-top";
import { useTranslation } from "react-i18next";

const Galery = () => {
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
			<section className="title-galery">
				<div className="layer">
					<div className="text">
						<h1>{t("galery.h1")}</h1>
					</div>
				</div>
			</section>

			<section className="galery-box">
				<div className="main-box">
					<div className="part1">
						<div className="photo1" data-aos="fade-up">
							<img src={galleryimg1} alt="error" />
						</div>
						<div className="photo2" data-aos="fade-up">
							<img src={galleryimg2} alt="error" />
						</div>
						<div className="photo3" data-aos="fade-up">
							<img src={galleryimg3} alt="error" />
						</div>
						<div className="photo4" data-aos="fade-up">
							<img src={galleryimg4} alt="error" />
						</div>
					</div>
					<div className="part2">
						<div className="photo1">
							<img src={galleryimg1} alt="error" data-aos="fade-up" />
						</div>
						<div className="photo2">
							<img src={galleryimg2} alt="error" data-aos="fade-up" />
						</div>
						<div className="photo3">
							<img src={galleryimg3} alt="error" data-aos="fade-up" />
						</div>
						<div className="photo4">
							<img src={galleryimg5} alt="error" data-aos="fade-up" />
						</div>
					</div>
					<div className="part3">
						<div className="photo1">
							<img src={galleryimg4} alt="error" data-aos="fade-up" />
						</div>
						<div className="photo2">
							<img src={galleryimg3} alt="error" data-aos="fade-up" />
						</div>
						<div className="photo3">
							<img src={galleryimg2} alt="error" data-aos="fade-up" />
						</div>
						<div className="photo4">
							<img src={galleryimg1} alt="error" data-aos="fade-up" />
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

export default Galery;
