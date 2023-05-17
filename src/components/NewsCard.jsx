import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const NewsCard = ({ img, title, time, text }) => {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<>
			<div className="news-card" data-aos="fade-up">
				<div className="photo">
					<img src={img} alt="error" />
				</div>
				<div className="card-body">
					<div className="card-title">
						<h1>{title}</h1>
					</div>
					<div className="card-time">
						<p>
							<i className="fa-solid fa-calendar-days"></i> {time}
						</p>
					</div>
					<div className="card-text">
						<p>{text ? `${text.substring(0, 80)}...` : null}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsCard;
