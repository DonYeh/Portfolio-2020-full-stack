import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";

const Home = () => {
	return (
		<CssBaseline>
			<div>
				<Navbar />
				<Header />
			</div>
		</CssBaseline>
	);
};

export default Home;
