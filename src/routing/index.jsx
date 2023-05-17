import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import News from "../pages/News";
import Galery from "../pages/Galery";
import Contact from "../pages/Contact";
import About from "../pages/About";

const WebRouting = () => {
	const routes = [
		{ path: "/", element: Home },
		{ path: "/about", element: About },
		{ path: "/products", element: Products },
		{ path: "/news", element: News },
		{ path: "/galery", element: Galery },
		{ path: "/contact", element: Contact }
	];
	return (
		<Routes>
			{routes.map((route) => {
				return <Route path={route.path} element={<route.element />}></Route>;
			})}
		</Routes>
	);
};

export default WebRouting;
