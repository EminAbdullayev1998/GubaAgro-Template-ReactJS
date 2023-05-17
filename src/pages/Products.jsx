import React, { useEffect } from "react";
import apple1 from "../img/apple1.jpg";
import apple2 from "../img/apple2.jpg";
import apple3 from "../img/apple3.jpg";
import apple4 from "../img/apple4.jpg";
import ProductCard from "../components/ProductCard";
import BackToTop from "react-back-to-top";
import { useTranslation } from "react-i18next";

const Products = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.querySelector(".back-to-up-default-text span").innerHTML =
			'<i class="fa-solid fa-arrow-up"></i>';
	});

	return (
		<>
			<section className="title-box">
				<div className="layer">
					<div className="text">
						<h1>{t("products.h1")}</h1>
					</div>
				</div>
			</section>

			<section className="products-section">
				<div className="main-box">
					<ProductCard
						img={apple1}
						title='Alma "Buckeye Gala"'
						kalibri="70-80 mm"
						kg="140-160 qram"
						dad="şirin və bərk"
					/>
					<ProductCard
						img={apple2}
						title='Alma "Ruby Gala"'
						kalibri="70-80 mm"
						kg="140-160 qram"
						dad="şirin və bərk"
					/>
					<ProductCard
						img={apple3}
						title='Alma "Rosy Glow"'
						kalibri="70-80 mm"
						kg="140-160 qram"
						dad="şirin və bərk"
					/>
					<ProductCard
						img={apple4}
						title='Alma "Galaval"'
						kalibri="70-80 mm"
						kg="140-160 qram"
						dad="şirin və bərk"
					/>
					<ProductCard
						img={apple1}
						title='Alma "Buckeye Gala"'
						kalibri="70-80 mm"
						kg="140-160 qram"
						dad="şirin və bərk"
					/>
					<ProductCard
						img={apple2}
						title='Alma "Galaval"'
						kalibri="70-80 mm"
						kg="140-160 qram"
						dad="şirin və bərk"
					/>
					<ProductCard
						img={apple3}
						title='Alma "Ruby Gala"'
						kalibri="70-80 mm"
						kg="140-160 qram"
						dad="şirin və bərk"
					/>
					<ProductCard
						img={apple4}
						title='Alma "Rosy Glow"'
						kalibri="70-80 mm"
						kg="140-160 qram"
						dad="şirin və bərk"
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

export default Products;
