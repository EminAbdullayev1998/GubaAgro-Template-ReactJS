import React, { useState } from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import '../config/i18n'
import { useTranslation } from "react-i18next";

const navs = [
	{
		to: "/",
		label: "Əsas Səhifə",
	},
	{
		to: "/about",
		label: "Haqqımızda",
	},
	{
		to: "/products",
		label: "Məhsullar",
	},
	{
		to: "/news",
		label: "Xəbərlər",
	},
	{
		to: "/galery",
		label: "Qalereya",
	},
	{
		to: "/contact",
		label: "Əlaqə",
	},
];

const Header = () => {

	const [menuOpen, setMenuOpen] = useState(false);

	const { t, i18n } = useTranslation();

	const [languageCode, setLanguageCode] = useState(localStorage.getItem('code'));

	const handleClick =(lang)=>{
	   i18n.changeLanguage(lang);
	   setLanguageCode(lang);
	   localStorage.setItem('code', lang);
	}

	return (
		<>
			<header>
				<div className="logo">
					<NavLink to='/'>
						<img src={logo} alt="error" />
					</NavLink>
					<div className="path"></div>
				</div>

				<div className="nav">
					<div className="navOne">
						<p className="mail">
							<i className="fa-solid fa-envelope"></i> info@gubagro.az
						</p>
						<p className="telephone">
							<i className="fa-solid fa-phone"></i> +994 12 310 02 40
						</p>
						<p>
						   {languageCode === "az" ? "AZ" : "EN"} <i className="fa-solid fa-chevron-down"></i>
						</p>
						<div className="lang-modal">
							<div className="az">
								<p onClick={()=>{handleClick('az')}}>AZ</p>
							</div>
							<div className="en">
								<p onClick={()=>{handleClick('en')}}>EN</p>
							</div>
						</div>
					</div>

					<div className="navTwo">
						<ul>
						{navs.map(({ to, label }, i) => (
                          <NavLink key={to} to={to} >
                            <li>{t(`header.${i}`, { defaultValue: label })}</li>
                          </NavLink>
                        ))}
						</ul>
						<i
							onClick={() => setMenuOpen(!menuOpen)}
							className={`fa-solid ${menuOpen ? "fa-x" : "fa-bars"}`}></i>
					</div>
				</div>

				<div
					className="menu"
					style={{ transform: menuOpen ? "translateX(0px)" : "translateX(1200px)" }}>
					<div className="main-box">
						<div className="nav">
							<ul className="ul">
								<NavLink to="/">
									<li>Əsas Səhifə</li>
								</NavLink>
								<NavLink to="/about">
									<li>Haqqımızda</li>
								</NavLink>
								<NavLink to="/products">
									<li>Məhsullar</li>
								</NavLink>
								<NavLink to="/news">
									<li>Xəbərlər</li>
								</NavLink>
								<NavLink to="/galery">
									<li>Qalereya</li>
								</NavLink>
								<NavLink to="/contact">
									<li>Əlaqə</li>
								</NavLink>
							</ul>
						</div>
						<div className="nav-2">
							<button>AZ</button>
							<button>EN</button>
						</div>
						<div className="nav-3">
							<p>
								<i className="fa-solid fa-phone"></i> +99412 310 02 40
							</p>
							<p>
								<i className="fa-solid fa-envelope"></i> info@gubagro.az
							</p>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
