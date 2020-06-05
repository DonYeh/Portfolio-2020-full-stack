import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar2 from "./Navbar2";
import Navbar3 from "./Navbar3";
import Navbar4 from "./Navbar4";
import logo from "./logo.svg";

import {
	AssignmentInd,
	// Home,
	Apps,
	ContactMail,
	InfoOutlined,
} from "@material-ui/icons";

const Home = () => {
	const menuIcons = [
		{
			// listIcon: <Home />,
			listIcon: <Apps />,
			listText: "Home",
			listPath: "/",
		},
		{
			listIcon: <InfoOutlined />,
			listText: "About me",
			listPath: "/about",
		},
		{
			listIcon: <AssignmentInd />,
			listText: "Resume",
			listPath: "/resume",
		},
		{
			listIcon: <Apps />,
			listText: "Portfolio",
			listPath: "/portfolio",
		},
		{
			listIcon: <ContactMail />,
			listText: "Contact",
			listPath: "/contact",
		},
	];

	return (
		<CssBaseline>
			<div>
				{/* <Navbar4
					menuIcons={menuIcons}
					logo={logo}
					background="#fff"
					hoverBackground="#ddd"
					linkColor="#777"
				/> */}

				{/* <Navbar /> */}
				{/* <Navbar3 /> */}
				<Header />
			</div>
		</CssBaseline>
	);
};

export default Home;
