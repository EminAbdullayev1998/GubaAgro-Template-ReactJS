import React, { useState } from "react";
import natural from "../img/natural.png";
import crops1 from "../img/crops1.png";
import { useTranslation } from "react-i18next";

export const HomeCategory = () => {

	const { t } = useTranslation();

	const [tab, setTab] = useState(0); // 0 , 1 , 2

	return (
		<>
			<div className="category-div">
				<div
					className={`haqqimizda ${tab === 0 ? "active-category" : ""}`}
					onClick={() => setTab(0)}>
					<div className="circle">
						<img src={natural} alt="error" />
					</div>
					<p>{t('homecategory.1p1')}</p>
				</div>
				<div
					className={`missiyamız ${tab === 1 ? "active-category" : ""}`}
					onClick={() => setTab(1)}>
					<div className="circle">
						<img src={crops1} alt="error" />
					</div>
					<p>{t('homecategory.2p1')}</p>
				</div>
				<div
					className={`vizyonumuz ${tab === 2 ? "active-category" : ""}`}
					onClick={() => setTab(2)}>
					<div className="circle">
						<img src={crops1} alt="error" />
					</div>
					<p>{t('homecategory.3p1')}</p>
				</div>
			</div>
			{tab === 0 && (
				<div className="hero-div">
					<div className="haqqimizda-div">
						<ul>
							<li>
								{t('homecategory.1li')}
							</li>
							<li>{t('homecategory.2li')}</li>
							<li>
							    {t('homecategory.3li')}
							</li>
							<li>
			   				    {t('homecategory.4li')}
							</li>
						</ul>
					</div>
				</div>
			)}
			{tab === 1 && (
				<div className="hero-div">
					<div className="haqqimizda-div">
						<ul>
							<li>
						      	{t('homecategory.5li')}
							</li>
							<li>
							    {t('homecategory.6li')}
							</li>
							<li>
							    {t('homecategory.7li')}
							</li>
						</ul>
					</div>
				</div>
			)}
			{tab === 2 && (
				<div className="hero-div">
					<div className="haqqimizda-div">
						<ul>
							<li>
							    {t('homecategory.8li')}
							</li>
							<li>
							    {t('homecategory.9li')}
							</li>
							<li>
							    {t('homecategory.10li')}
							</li>
							<li>
							    {t('homecategory.11li')}
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};
