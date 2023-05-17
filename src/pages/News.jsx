import React, { useEffect } from "react";
import photo from "../img/newscard.jpg";
import NewsCard from "../components/NewsCard";
import BackToTop from "react-back-to-top";
import { useTranslation } from "react-i18next";

const News = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.querySelector(".back-to-up-default-text span").innerHTML =
			'<i class="fa-solid fa-arrow-up"></i>';
	});

	return (
		<>
			<section className="title-news">
				<div className="layer">
					<div className="text">
						<h1>{t("news.h1")}</h1>
					</div>
				</div>
			</section>

			<section className="news-section">
				<div className="main-box">
					<NewsCard
						img={photo}
						title="Zəfər Günü"
						time="5 May 2023"
						text="Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla."
					/>
					<NewsCard
						img={photo}
						title="Zəfər Günü"
						time="5 May 2023"
						text="Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla."
					/>
					<NewsCard
						img={photo}
						title="Zəfər Günü"
						time="5 May 2023"
						text="Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla."
					/>
					<NewsCard
						img={photo}
						title="Zəfər Günü"
						time="5 May 2023"
						text="Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla."
					/>
					<NewsCard
						img={photo}
						title="Zəfər Günü"
						time="5 May 2023"
						text="Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla."
					/>
					<NewsCard
						img={photo}
						title="Zəfər Günü"
						time="5 May 2023"
						text="Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla.Sentyabrın 27-dən başlayan, 44 gün davam edən və Dağlıq Qarabağ da daxil olmaqla."
					/>
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

export default News;
