import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import WebRouting from "./routing";
import "./sass/style.scss";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {

	const [showLoader, setShowLoader] = useState(true);

	useEffect(()=>{
		setTimeout(()=>{
			setShowLoader(false);
		}, 3000)
	}, [])

	return (
		<>
			{showLoader ? (
				<Loader />
			): (
				<>
				<Header />
				<WebRouting />
				<Footer />
				</>
			)}
		</>
	);
};

export default App;
