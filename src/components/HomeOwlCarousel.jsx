import React from "react";
import left from "../img/arrowleft.png";
import right from "../img/arrowright.png";
import galleryimg1 from "../img/galleryimg1.jpg";
import galleryimg2 from "../img/galleryimg2.jpg";
import galleryimg3 from "../img/galleryimg3.jpg";
import galleryimg4 from "../img/galleryimg4.jpg";
import galleryimg5 from "../img/galleryimg5.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeOwlCarousel = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 4
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		},
	};

	const CustomLeftArrow = ({ onClick }) => (
		<img
			className="left"
			onClick={onClick}
			style={{ position: "absolute", left: 0 }}
			src={left}
			alt="error"
		/>
	);

	const CustomRightArrow = ({ onClick }) => (
		<img
			className="right"
			src={right}
			alt="error"
			onClick={onClick}
			style={{ position: "absolute", right: 0 }}
		/>
	);

	return (
		<>
			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={1000}
        arrows={true}
        customRightArrow={<CustomRightArrow/>}
        customLeftArrow={<CustomLeftArrow/>}
        >
				<div className="carouselImageBox">
					<img className="carouselImage" src={galleryimg1} alt='error' />
				</div>
				<div className="carouselImageBox">
					<img className="carouselImage" src={galleryimg2} alt='error' />
				</div>
				<div className="carouselImageBox">
					<img className="carouselImage" src={galleryimg3} alt='error' />
				</div>
				<div className="carouselImageBox">
					<img className="carouselImage" src={galleryimg4} alt='error' />
				</div>
				<div className="carouselImageBox">
					<img className="carouselImage" src={galleryimg5} alt='error' />
				</div>
				<div className="carouselImageBox">
					<img className="carouselImage" src={galleryimg1} alt='error' />
				</div>
				<div className="carouselImageBox">
					<img className="carouselImage" src={galleryimg2} alt='error' />
				</div>
				<div className="carouselImageBox">
					<img className="carouselImage" src={galleryimg3} alt='error' />
				</div>
			</Carousel>
		</>
	);
};

export default HomeOwlCarousel;
