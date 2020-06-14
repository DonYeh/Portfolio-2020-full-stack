import React from "react";

import {
	makeStyles,
	responsiveFontSizes,
	createMuiTheme,
} from "@material-ui/core/styles";
import {
	Typography,
	Box,
	Paper,
	Grid,
	Card,
	Container,
	Link,
	CssBaseline,
	ThemeProvider,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

import GetAppIcon from "@material-ui/icons/GetApp";
// import { FullscreenExit } from "@material-ui/icons";

import {
	orange,
	lightBlue,
	deepPurple,
	deepOrange,
	greyBlue,
	green,
	lightGreen,
	teal,
	grey,
} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		// width: "100vw",
		background: "#234darkMode ? classes.headingDark : ",
	},
	heading: {
		color: "rgba(4, 78, 80, 0.8)",
		// padding: "1rem 0 1rem",
		// marginTop: ".3rem",
		padding: ".7rem",
		// paddingBottom: "1.2rem",
		textTransform: "uppercase",
		[theme.breakpoints.up("sm")]: {
			paddingTop: "1rem",
		},
		// zIndex: "1",
	},

	headingDark: {
		color: "rgba(244, 164, 96, 0.8)",
		// padding: "1rem 0 1rem",
		// marginTop: ".3rem",
		padding: ".7rem",
		// paddingBottom: "1.2rem",
		textTransform: "uppercase",
		[theme.breakpoints.up("sm")]: {
			paddingTop: "1rem",
		},
		// zIndex: "1",
	},

	downloadResume: {
		backgroundColor: "rgba(122, 132, 142, 0.9)",
		display: "flex",
		color: "rgba(0,0,0,.6)",
		// paddingTop: "7vh",
		// paddingBottom: "2vh",
		// maxHeight: "18vh",
		// minHeight: "14vh",
		// alignItems: "center",
		// padding: "4rem 0 1.2rem",
		paddingTop: "4rem",
		// background: "lightslategray",
		// background: "rgba(0,0,0,.15)",
		// background: "rgba(255,255,255,.55)",

		[theme.breakpoints.up("sm")]: {
			// paddingTop: "1rem",
			padding: "1rem 0rem .5rem",
			// paddingBottom: ".10vh",
			// maxHeight: "15vh",
			// height: "99%",
			// backgroundColor: "red",
			// minHeight: "14vh",
			alignItems: "flex-end",
			// paddingTop: "4.4vh",
		},
		[theme.breakpoints.up("md")]: {
			// paddingTop: "5vh",
			// minHeight: "8.5vh",
		},
	},

	downloadResumeDark: {
		backgroundColor: "rgba(27, 30, 30, 0.88)",
		display: "flex",
		color: "rgba(118, 147, 151, 0.8)",
		// paddingTop: "7vh",
		// paddingBottom: "2vh",
		// maxHeight: "18vh",
		// minHeight: "14vh",
		// alignItems: "center",
		// padding: "4rem 0 1.2rem",
		paddingTop: "4rem",
		// background: "lightslategray",
		// background: "rgba(0,0,0,.15)",
		// background: "rgba(255,255,255,.55)",

		[theme.breakpoints.up("sm")]: {
			// paddingTop: "1rem",
			padding: "1rem 0rem .5rem",
			// paddingBottom: ".10vh",
			// maxHeight: "15vh",
			// height: "99%",
			// backgroundColor: "red",
			// minHeight: "14vh",
			alignItems: "flex-end",
			// paddingTop: "4.4vh",
		},
		[theme.breakpoints.up("md")]: {
			// paddingTop: "5vh",
			// minHeight: "8.5vh",
		},
	},

	downloadResumeText: {
		// width: "50%",
		// paddingTop: "1rem",
		color: "white",

		// background: "pink",
	},
	downloadResumeButton: { backgroundColor: "rgba(179, 189, 191, 0.9)" },
	downloadResumeButtonDark: {
		padding: "",
		color: "rgba(118, 147, 151, 0.8)",
		backgroundColor: "rgba(25, 28, 28, 0.9)",
	},
	button: {
		margin: theme.spacing(1),
	},
	boxTechnologies: {
		// color: "cadetblue",
		// padding: "1rem 0 0",
		// textTransform: "uppercase",
		// margin: "0 10%",
		background: "rgba(255, 255, 255, 0.77)",
		fontSize: "smaller",
		// padding: "1.5em ",
		// marginTop: "1rem",
		margin: ".1rem 0 0",
		padding: ".4rem 0rem 1rem",
		[theme.breakpoints.up("md")]: {
			padding: ".4rem 0rem 1rem",
		},
		// marginRight: "1.4rem",
	},
	boxTechnologiesDark: {
		// color: "cadetblue",
		// padding: "1rem 0 0",
		// textTransform: "uppercase",
		// margin: "0 10%",
		backgroundColor: "rgba(56, 55, 55, 0.81)",

		fontSize: "smaller",
		// padding: "1.5em ",
		// marginTop: "1rem",
		margin: ".1rem 0 0",
		padding: ".4rem 0rem 1rem",
		[theme.breakpoints.up("md")]: {
			padding: ".4rem 0rem 1rem",
		},
		// marginRight: "1.4rem",
	},

	heading2Title: {
		// paddingTop: ".75rem",
		color: "rgba(80, 100, 102, 0.9)",
		textTransform: "uppercase",
	},
	heading2TitleDark: {
		// paddingTop: ".75rem",
		color: "rgba(120, 151, 155, .9)",
		textTransform: "uppercase",
	},

	subHeading2: {
		color: "rgba(90, 90, 90, 0.9)",
		padding: "0",
		// textTransform: "upper"
	},
	subHeading2Dark: {
		// color: "rgba(255, 218, 185, 0.77)",
		color: "rgba(255, 218, 185, 0.5882352941176471)",
	},
	subHeading: {
		// color: "rgba(34, 51, 68, 0.81)",
		color: "rgba(77, 81, 86, 0.93)",
		padding: "0",
		textTransform: "uppercase",
	},
	subHeadingDark: {
		color: "rgba(185, 185, 185, 0.88)",
		padding: "0",
		textTransform: "uppercase",
	},

	timeLineBox: {
		display: "flex",
		postion: "relative",
		width: "100vw",
		paddingBottom: "2vh",

		"&:before": {
			content: "''",
			position: "absolute",
			height: "25.5%",
			border: "1px solid rgba(82, 84, 84, 0.7)",
			right: "4vw",

			transform: "translate(0rem, 3.2rem)",
		},
		"&:after": {
			content: "''",
		},
		[theme.breakpoints.up("sm")]: {
			// padding: "2rem",

			"&:before": {
				transform: "translate(0px, 5.5rem)",
				height: "60vh",
				left: "calc(50% - 1px)",
				right: "auto",
				maxHeight: "84vh",
			},
		},
		[theme.breakpoints.up("md")]: {
			paddingBottom: ".5rem",
			"&:before": {
				transform: "translate(0px, 5.6rem)",
				height: "45.5vh",
				left: "calc(50% - 1px)",
				right: "auto",
			},
		},
	},
	timeLineBoxDark: {
		display: "flex",
		postion: "relative",
		width: "100vw",
		paddingBottom: "2vh",

		"&:before": {
			content: "''",
			position: "absolute",
			height: "25.5%",

			border: "1px solid lightgrey ",
			right: "4vw",

			transform: "translate(0rem, 3.2rem)",
		},
		"&:after": {
			content: "''",
		},
		[theme.breakpoints.up("sm")]: {
			// padding: "2rem",

			"&:before": {
				transform: "translate(0px, 5.5rem)",
				height: "60vh",
				left: "calc(50% - 1px)",
				right: "auto",
				maxHeight: "84vh",
			},
		},
		[theme.breakpoints.up("md")]: {
			paddingBottom: ".5rem",
			"&:before": {
				transform: "translate(0px, 5.6rem)",
				height: "45.5vh",
				left: "calc(50% - 1px)",
				right: "auto",
			},
		},
	},

	timeLineItem: {
		padding: "1rem 1rem .5rem 1rem",
		// borderBottom: "8px solid tan",
		position: "relative",
		// margin: ".6rem 3.8rem .6rem .6rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "2.0rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor:
				"rgba(244, 164, 96, 0.8) rgba(244, 164, 96, 0.8) transparent transparent",
			borderWidth: ".44rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("sm")]: {
			padding: "0rem 1rem ",
			width: "44%",
			margin: "-.5rem .5rem",
			"&:before": {
				content: "''",
				position: "absolute",
				// left: "15.3rem",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor: "sandybrown sandybrown transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
				right: "0rem",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				margin: ".8rem .2rem .8rem 1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: ".5rem",
				borderColor: "transparent transparent sandybrown sandybrown",
			},
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:before": {
				content: "''",
				position: "absolute",
				left: "18.5rem",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor: "sandybrown sandybrown transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.1rem",
				borderColor: "transparent transparent sandybrown sandybrown",
			},
		},
	},

	timeLineItemDark: {
		padding: "1rem 1rem .5rem 1rem",
		// borderBottom: "8px solid tan",
		position: "relative",
		// margin: ".6rem 3.8rem .6rem .6rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "2.0rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor:
				"rgba(244, 164, 96, 0.8) rgba(244, 164, 96, 0.8) transparent transparent",
			borderWidth: ".44rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("sm")]: {
			padding: "0rem 1rem ",
			width: "44%",
			margin: "-.5rem .5rem",
			"&:before": {
				content: "''",
				position: "absolute",
				// left: "15.3rem",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor: "sandybrown sandybrown transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
				right: "0rem",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				margin: ".8rem .2rem .8rem 1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: ".5rem",
				borderColor: "transparent transparent sandybrown sandybrown",
			},
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:before": {
				content: "''",
				position: "absolute",
				left: "18.5rem",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor: "sandybrown sandybrown transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.1rem",
				borderColor: "transparent transparent sandybrown sandybrown",
			},
		},
	},

	timeLineYear: {
		textAlign: "center",
		maxWidth: "4.5rem",
		margin: "0 2.5rem 0 auto",
		fontSize: "1.1rem",
		fontWeight: "bold",
		background: "rgba(137, 137, 137, 0.4)",
		color: "rgba(70, 70, 70, 0.71)",
		lineHeight: 0.5,
		padding: "0.5rem",
		// zIndex: "1",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("sm")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	timeLineYearDark: {
		textAlign: "center",
		maxWidth: "4.5rem",
		margin: "0 2.5rem 0 auto",
		fontSize: "1.1rem",
		fontWeight: "bold",
		background: "rgba(29, 35, 39, 0.84)",
		color: "rgba(144, 144, 144, 0.61)",
		lineHeight: 0.5,
		padding: "0.5rem",
		// zIndex: "1",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("sm")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},

	subHeading2E: {
		color: "rgba(99, 99, 99, 0.91)",
	},
	subHeading2EDark: {
		// color: "#rgba(117, 143, 169, 0.96)",
		color: "rgba(143, 154, 173, 0.92)",
	},

	subHeadingE: {
		color: "sandybrown",
		padding: "0",
		textTransform: "uppercase",
	},
	subHeadingEDark: {
		color: "rgba(244, 164, 96, 0.7)",
		padding: "0",
		textTransform: "uppercase",
	},
	timeLineBoxE: {
		// display: "flex",
		postion: "relative",
		width: "100vw",
		// flexGrow: "1",
		// flexDirection: "column",
		// transform: "translate(0px, .5rem)",
		// height: "96%",
		padding: "1.3rem",
		margin: "0 auto",
		// backgroundColor: "purple",
		"&:before": {
			content: "''",
			position: "absolute",
			border: "1px solid darkgrey ",

			height: " 37.5%",
			// maxHeight: "113vh",
			// transform: "translate(10px)",

			[theme.breakpoints.up("sm")]: {
				// padding: "1rem",
				// height: "99%",

				height: "55vh",
			},

			[theme.breakpoints.up("md")]: {
				// padding: " .5rem",
				// height: "99%",

				height: "65vh",
				left: "calc(50% - 1px)",
				right: "auto",
				// zIndex: "-1",
			},
			// "&:after": {
			// 	content: "''",
			// 	height: "98%",
			// 	clear: "both",
			// },
		},
	},
	timeLineBoxEDark: {
		// display: "flex",
		postion: "relative",
		width: "100vw",
		// flexGrow: "1",
		// flexDirection: "column",
		// transform: "translate(0px, .5rem)",
		// height: "96%",
		padding: "1.3rem",
		margin: "0 auto",
		// backgroundColor: "purple",
		"&:before": {
			content: "''",
			position: "absolute",
			border: "1px solid rgba(169, 169, 169, 0.3)",

			height: " 37.5%",
			// maxHeight: "113vh",
			// transform: "translate(10px)",

			[theme.breakpoints.up("sm")]: {
				// padding: "1rem",
				// height: "99%",

				height: "55vh",
			},

			[theme.breakpoints.up("md")]: {
				// padding: " .5rem",
				// height: "99%",

				height: "65vh",
				left: "calc(50% - 1px)",
				right: "auto",
				// zIndex: "-1",
			},
			// "&:after": {
			// 	content: "''",
			// 	height: "98%",
			// 	clear: "both",
			// },
		},
	},

	timeLineItemE: {
		// padding: "1rem",
		padding: "1rem 1rem 1rem 3rem",
		// borderBottom: "2px solid tan",
		position: "relative",
		// margin: ".6rem 3rem .6rem .6rem",
		clear: "both",
		// backgroundColor: "white",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			left: "1.2rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "cadetblue cadetblue transparent transparent",
			borderWidth: "0.44rem",
			transform: "rotate(225deg)",
		},
		[theme.breakpoints.up("md")]: {
			padding: "1rem 1.2rem 1rem 2.1rem",
			width: "48%",
			"&:before": {
				content: "''",
				position: "absolute",
				left: "18.5rem",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor: "cadetblue cadetblue transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				// margin: "1rem",
				borderColor: "purple",
			},
			"&:nth-of-type(2n):before": {
				left: "auto",
				left: ".4rem",
				borderColor: "transparent transparent cadetblue cadetblue",
			},
		},
	},
	timeLineItemEDark: {
		// padding: "1rem",
		padding: "1rem 1rem 1rem 3rem",
		// borderBottom: "2px solid tan",
		position: "relative",
		// margin: ".6rem 3rem .6rem .6rem",
		clear: "both",
		// backgroundColor: "white",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			left: "1.2rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor:
				"rgba(95, 158, 160, 0.8) rgba(95, 158, 160, 0.8) transparent transparent",
			borderWidth: "0.44rem",
			transform: "rotate(225deg)",
		},
		[theme.breakpoints.up("md")]: {
			padding: "1rem 1.2rem 1rem 2.1rem",
			width: "48%",
			"&:before": {
				content: "''",
				position: "absolute",
				left: "18.5rem",
				top: "calc(50% - 5px)",
				borderStyle: "solid",
				borderColor:
					"rgba(95, 158, 160, 0.8) rgba(95, 158, 160, 0.8) transparent transparent",
				borderWidth: "0.44rem",
				transform: "rotate(45deg)",
			},
			"&:nth-of-type(2n)": {
				float: "right",
				// margin: "1rem",
				borderColor: "purple",
			},
			"&:nth-of-type(2n):before": {
				left: "auto",
				left: ".4rem",
				borderColor:
					"transparent transparent rgba(95, 158, 160, 0.8) rgba(95, 158, 160, 0.8)",
			},
		},
	},

	timeLineYearE: {
		textAlign: "center",
		maxWidth: "4.5rem",
		margin: "0 auto 0 1.5rem",
		fontSize: "1.1rem",
		background: "rgba(34, 51, 68, 0.3)",
		// color: "rgba(34, 51, 68, 0.4)",

		color: "rgba(49, 49, 49, 0.47)",
		lineHeight: 0.5,
		padding: ".5rem",
		fontWeight: "bold",
		// zIndex: "1",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	timeLineYearEDark: {
		textAlign: "center",
		maxWidth: "4.5rem",
		margin: "0 auto 0 1.5rem",
		fontSize: "1.1rem",
		background: "#234",
		color: "rgba(211, 211, 211, 0.69)",
		lineHeight: 0.5,
		padding: ".5rem",
		fontWeight: "bold",
		// zIndex: "1",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			zIndex: "1",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},

	papersGridContainer: {
		display: "flex",
		// justify: "space-evenly",
		width: "100%",
		padding: "1.2em 1em 3em",
		// alignItems: "flex-start",
		// backgroundColor: "purple",
		// wrap: "wrap",
		// gridItem: {
		// background: "black",
	},
	frontEndGridItem: {
		// display: "flex",
		// flexWrap: "wrap",
		// justify: "space-evenly",
		// alignItems: "center",
		// backgroundColor: "teal",
		// padding: "0 1.3em",
	},
	backEndGridItem: {
		// backgroundColor: "lightgrey",
		alignItems: "center",
	},
	toolsGridItem: {
		// backgroundColor: "peachpuff",
		alignItems: "center",
	},
	paper: {
		color: "rgb(55, 94, 95)",
		backgroundColor: "rgba(229, 234, 236, 0.8)",
		fontSize: "1.1em",
		textAlign: "center",
		padding: ".5em",
		overflow: "hidden",
		textOverflow: "ellipsis",
		// width: "1rem",
	},
	paperDark: {
		// color: "rgba(23, 77, 130, 0.89)",
		color: "rgb(110, 141, 143)",
		backgroundColor: "rgba(29, 33, 33, 0.6)",
		fontSize: "1.1em",
		textAlign: "center",
		padding: ".5em",
		overflow: "hidden",
		textOverflow: "ellipsis",
		// width: "1rem",
	},
	experienceBox: {
		width: "100%",
		paddingTop: "1.2rem",
		// backgroundColor: "rgba(255, 240, 220, 0.4)",
		backgroundColor: "rgba(251, 246, 239, 0.77)",
		color: "#234",

		[theme.breakpoints.up("md")]: {
			// paddingBottom: ".5rem",
			// height: "99%",
			// "&:after": {
			// 	content: "''",
			// 	height: "98%",
			// 	clear: "both",
			// },
		},
	},
	experienceBoxDark: {
		width: "100%",
		paddingTop: "1.2rem",
		backgroundColor: "rgba(29, 34, 39, 0.8)",
		color: "#234",

		[theme.breakpoints.up("md")]: {
			// paddingBottom: ".5rem",
			// height: "99%",
			// "&:after": {
			// 	content: "''",
			// 	height: "98%",
			// 	clear: "both",
			// },
		},
	},

	technologyGridItems: { color: "rgba(100, 131, 163, 0.99)" },
	// technologyGridItemsDark: { color: "rgba(67, 179, 243, 0.72)" },
	technologyGridItemsDark: { color: "#b3835a" },

	location: {
		// color: "rgba(78, 77, 77, 0.9)",
		color: "rgba(2, 90, 80, 0.88)",
	},
	locationDark: {
		color: "rgba(163, 213, 212, 0.69)",
	},
	locationE: { color: "rgba(0, 95, 105, 0.8196078431372549)" },
	locationEDark: {
		color: "rgba(219, 189, 161, 0.7)",
	},

	jobDescription: { color: "rgba(88, 88, 88, 0.88)" },
	jobDescriptionDark: {
		color: "rgba(184, 184, 184, 0.68)",
	},

	techFE: { color: "rgba(95, 95, 95, 0.9)" },
	techFEDark: {
		color: "rgba(255,255,255,.55)",
	},
	eduDesc: { color: "rgba(80, 80, 80, 0.89)", padding: "0 1.5rem" },
	eduDescDark: { color: "#c8c8c8a3", padding: "0 1.5rem" },

	experienceTitle: { color: "rgba(85, 101, 99, 0.91)" },
	experienceTitleDark: { color: "rgba(255, 223, 196, 0.61)" },
}));

// const LinkBehavior = React.forwardRef((props, ref) => (
// 	<RouterLink ref={ref} to="../images/Boone.png" {...props} />
// ));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Resume = ({ darkMode }) => {
	const classes = useStyles();

	const mainPrimaryColor = darkMode ? grey[900] : orange[300];

	// const mainSecondaryColor = darkMode ? deepOrange[900] : deepPurple[500];
	const mainSecondaryColor = darkMode ? orange[700] : teal[800];

	let darkTheme = responsiveFontSizes(
		createMuiTheme({
			overrides: {
				MuiPaper: {
					root: {
						backgroundColor: darkMode
							? "rgba(0,0,0,.6)"
							: "rgba(255,255,255,.6)",
						//   marginBottom: '10px'
					},
				},
			},
			palette: {
				type: darkMode ? "dark" : "light",
				primary: {
					main: mainPrimaryColor,
				},
				secondary: {
					main: mainSecondaryColor,
				},
			},
		})
	);

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Paper className={classes.mainResumePaper}>
				<Grid
					container
					// direction="column"
					justify="center"
					// component="header"
					className={classes.mainContainer}
				>
					<Grid
						item
						container
						className={
							darkMode
								? classes.downloadResumeDark
								: classes.downloadResume
						}
						justify="center"
						alignContent="flex-end"
						// style={{
						// 	backgroundColor: darkMode
						// 		? "rgba(49, 53, 60, 0.96)"
						// 		: "rgba(255,255,255,.5)",
						// }}
						// style={{ backgroundColor: "green" }}
					>
						<Grid item style={{ paddingBottom: ".5rem" }}>
							{/* <GetAppIcon style={{ color: "cadetblue" }} /> */}
							<Link
								href="https://drive.google.com/open?id=1o9VgNvrVhskDqi76UCsFQiByLeDUv0BZ"
								// onClick={preventDefault}
								// variant="body2"
							>
								{/* {3variant="body2"'} */}
								{/* <Typography variant="h5">
									{" "}
									Download Resume
								</Typography> */}
								<Button
									variant="contained"
									// color="primary"
									size="small"
									className={classes.button}
									startIcon={<SaveIcon />}
									// style={{
									// 	backgroundColor: darkMode
									// 		? "rgba(144, 144, 144, 0.5)"
									// 		: "rgba(255,255,255,.5)",
									// }}
									className={
										darkMode
											? classes.downloadResumeButtonDark
											: classes.downloadResumeButton
									}
								>
									Download resume
								</Button>
							</Link>
						</Grid>
					</Grid>

					{/* <Box component="div" className={classes.timeLineBox}> */}
					<Grid
						item
						container
						className={classes.timeLineBox}
						style={{
							backgroundColor: darkMode
								? "rgba(36, 41, 41, 0.9)"
								: "rgba(208, 219, 222, 0.9)",
						}}
					>
						<Grid item xs={12}>
							<Typography
								variant="h4"
								align="center"
								className={
									darkMode
										? classes.headingDark
										: classes.heading
								}
								style={{
									color: darkMode
										? "rgba(244, 164, 96, 0.8)"
										: "rgba(4, 78, 80, 0.8)",
								}}
							>
								Education
							</Typography>
							<Typography
								variant="h6"
								className={
									darkMode
										? `${classes.timeLineYearDark} ${classes.timeLineItemDark}`
										: `${classes.timeLineYear} ${classes.timeLineItem}`
								}
							>
								2019
							</Typography>

							<Box
								component="div"
								className={
									darkMode
										? classes.timeLineItemDark
										: classes.timeLineItem
								}
							>
								<Typography
									variant="h5"
									align="center"
									className={
										darkMode
											? classes.subHeadingDark
											: classes.subHeading
									}
								>
									Digital Crafts
								</Typography>
								<Typography
									variant="h6"
									align="center"
									className={
										darkMode
											? classes.subHeading2Dark
											: classes.subHeading2
									}
									// style="{{ color: "tan"}}
								>
									Web Development Bootcamp
								</Typography>
								<Typography
									variant="body1"
									align="center"
									className={
										darkMode
											? classes.locationDark
											: classes.location
									}
								>
									Atlanta, GA
								</Typography>

								<Typography
									variant="subtitle1"
									align="center"
									className={
										darkMode
											? classes.eduDescDark
											: classes.eduDesc
									}
								>
									Certificate in Full Stack software
									development
								</Typography>
							</Box>
							<Typography
								variant="h6"
								className={
									darkMode
										? `${classes.timeLineYearDark} ${classes.timeLineItemDark}`
										: `${classes.timeLineYear} ${classes.timeLineItem}`
								}
							>
								2013
							</Typography>
							<Box
								component="div"
								className={classes.timeLineItem}
							>
								<Typography
									variant="h5"
									align="center"
									className={
										darkMode
											? classes.subHeadingDark
											: classes.subHeading
									}
								>
									Georgia Institute of Technology
								</Typography>
								<Typography
									variant="h6"
									align="center"
									className={
										darkMode
											? classes.subHeading2Dark
											: classes.subHeading2
									}
									// style="{{ color: "tan"}}
								>
									Scheller College of Business
								</Typography>
								<Typography
									variant="body1"
									align="center"
									className={
										darkMode
											? classes.locationDark
											: classes.location
									}
									// style={{
									// 	color: darkMode
									// 		? "rgba(163, 213, 212, 0.69)"
									// 		: "rgba(163, 213, 212, 0.97)",
									// }}
								>
									Atlanta, GA
								</Typography>

								{/* 
	subHeadingDark: {
		color: "subHeadingDark",
	}, */}
								<Typography
									variant="subtitle1"
									align="center"
									className={
										darkMode
											? classes.eduDescDark
											: classes.eduDesc
									}
								>
									Master of Business Administration
								</Typography>
							</Box>
							<Typography
								variant="h6"
								className={
									darkMode
										? `${classes.timeLineYearDark} ${classes.timeLineItemDark}`
										: `${classes.timeLineYear} ${classes.timeLineItem}`
								}
							>
								2007
							</Typography>
							<Box
								component="div"
								className={classes.timeLineItem}
							>
								<Typography
									variant="h5"
									align="center"
									className={
										darkMode
											? classes.subHeadingDark
											: classes.subHeading
									}
								>
									Georgia Institute of Technology
								</Typography>

								<Typography
									variant="h6"
									align="center"
									className={
										darkMode
											? classes.subHeading2Dark
											: classes.subHeading2
									}
									// style="{{ color: "tan"}}
								>
									School of Electrical and Computer
									Engineering
								</Typography>

								<Typography
									variant="body1"
									align="center"
									className={
										darkMode
											? classes.locationDark
											: classes.location
									}
								>
									Atlanta, GA
								</Typography>

								<Typography
									variant="subtitle1"
									align="center"
									// style={{
									// 	color: darkMode
									// 		? "#c8c8c8a3"
									// 		: "#c8c8c8",
									// }}

									className={
										darkMode
											? classes.eduDescDark
											: classes.eduDesc
									}
								>
									Bachelor of Science in Electrical
									Engineering
								</Typography>
							</Box>
						</Grid>
					</Grid>
					{/* </Box> */}
					{/* <Box className={classes.boxTechnologies} justifyContent="center"> */}
					<Grid
						item
						container
						spacing={2}
						justify="center"
						// alignItems="flex-start"
						alignItems="self-end"
						// alignContent="center"
						// className={classes.papersGridContainer}
						className={
							darkMode
								? classes.boxTechnologiesDark
								: classes.boxTechnologies
						}
						// wrap="wrap"
						// style={{
						// 	backgroundColor: darkMode
						// 		? "rgba(56, 55, 55, 0.66)"
						// 		: "rgba(255,255,255,.5)",
						// }}
					>
						<Grid item container justify="center">
							<Grid item xs={12}>
								<Typography
									variant="h4"
									align="center"
									className={
										darkMode
											? classes.heading2TitleDark
											: classes.heading2Title
									}
								>
									Technologies
								</Typography>
							</Grid>
						</Grid>
						<Grid
							item
							justify="center"
							container
							xs={12}
							sm={6}
							md={4}
							spacing={1}
							className={classes.frontEndGridItem}
						>
							{/* <Box className="feBox"></Box> */}
							<Grid item xs={12}>
								<Typography
									align="center"
									// style={{
									// 	color: darkMode
									// 		? // ? "rgba(255, 255, 255, 0.55)"
									// 		  "rgba(255, 255, 255, 0.6)"
									// 		: "rgba(0, 0, 0, 0.7)",
									// }}
									className={
										darkMode
											? classes.techFEDark
											: classes.techFE
									}
								>
									Front End
								</Typography>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								style={{
									color: darkMode
										? "rgba(255,255,255,.4)"
										: "rgba(0,0,0,.5)",
								}}
							>
								<Paper
									elevation={3}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									HTML5
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={3}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									CSS3
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									Javascript
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									Typescript
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									React
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// className={classes.paperReactNative}
									// square
								>
									Material-UI
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									Angular
								</Paper>
							</Grid>
							<Grid
								item
								xs={4}
								sm={4}
								md={4}
								className={classes.technologyGridItems}
							>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									React Native
								</Paper>
							</Grid>
						</Grid>

						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							container
							spacing={1}
							justify="center"
							className={classes.backEndGridItem}
						>
							<Grid item xs={12}>
								<Typography
									align="center"
									// style={{
									// 	color: darkMode
									// 		? "rgba(255, 255, 255, 0.6)"
									// 		: "rgba(0, 0, 0, 0.7)",
									// }}

									className={
										darkMode
											? classes.techFEDark
											: classes.techFE
									}
								>
									Back End
								</Typography>
							</Grid>

							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									<div>Node</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									<div>Express</div>
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									Python
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									PostgreSQL
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									SQL
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									GraphQL
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									WebSockets
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									NGINX
								</Paper>
							</Grid>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							container
							justify="center"
							spacing={1}
							className={classes.toolsGridItem}
						>
							<Grid item xs={12}>
								<Typography
									align="center"
									// style={{
									// 	color: darkMode
									// 		? "rgba(255, 255, 255, 0.6)"
									// 		: "rgba(0, 0, 0, 0.7)",
									// }}
									className={
										darkMode
											? classes.techFEDark
											: classes.techFE
									}
								>
									Tools
								</Typography>
							</Grid>

							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									VS Code
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									AWS
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									NPM
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									Git
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									GitHub
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									Jasmine
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									Mocha
								</Paper>
							</Grid>
							<Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// square
								>
									Webpack
								</Paper>
							</Grid>

							{/* <Grid item xs={4} sm={4} md={4}>
								<Paper
									elevation={2}
									variant="outlined"
									className={classes.paper}
									// square
								>
									html
								</Paper>
							</Grid> */}
						</Grid>
						{/* </Grid> */}
					</Grid>
					{/* </Box> */}
					{/* <Box className={classes.experienceBox}> */}
					<Grid
						item
						container
						className={
							darkMode
								? classes.experienceBoxDark
								: classes.experienceBox
						}
						justify="center"
						// style={{
						// 	backgroundColor: darkMode
						// 		? "#1d2227fc"
						// 		: "rgba(255,255,255,.4)",
						// }}
					>
						<Grid item container justify="center">
							<Grid item>
								<Typography
									variant="h4"
									align="center"
									// style={{
									// 	textTransform: "uppercase",
									// 	color: darkMode
									// 		? "rgba(255, 223, 196, 0.61)"
									// 		: // : "#ffdfc4eb",
									// 		  "rgba(82, 82, 82, 0.82)",
									// }}
									className={
										darkMode
											? classes.experienceTitleDark
											: classes.experienceTitle
									}
								>
									Experience
								</Typography>
							</Grid>

							{/* {/* </Grid> */}
							{/* <Box component="div" className={classes.timeLineBoxE}> */}
							<Grid
								item
								className={
									darkMode
										? classes.timeLineBoxEDark
										: classes.timeLineBoxE
								}
							>
								<Typography
									variant="h6"
									className={
										darkMode
											? `${classes.timeLineYearEDark} ${classes.timeLineItemEDark}`
											: `${classes.timeLineYearE} ${classes.timeLineItemE}`
									}
								>
									2020
								</Typography>
								<Box
									component="div"
									className={
										darkMode
											? classes.timeLineItemEDark
											: classes.timeLineItemE
									}
								>
									<Typography
										variant="h5"
										align="center"
										className={
											darkMode
												? classes.subHeadingEDark
												: classes.subHeadingE
										}
										// style={{
										// 	color: darkMode
										// 		? "rgba(244, 164, 96, 0.78)"
										// 		: "#07182af5",
										// }}
									>
										Ton Ton Ramen & Yakitori
									</Typography>
									<Typography
										variant="h6"
										align="center"
										className={
											darkMode
												? classes.subHeading2EDark
												: classes.subHeading2E
										}
										// style={{
										// 	color: darkMode
										// 		? "rgba(143, 154, 173, 0.92)"
										// 		: "rgba(255, 255, 255, 0.88)",
									>
										Server
									</Typography>
									<Typography
										variant="body1"
										align="center"
										// style={{
										// 	color: darkMode
										// 		? "rgba(219, 189, 161, 0.9)"
										// 		: "",
										// }}
										className={
											darkMode
												? classes.locationEDark
												: classes.locationE
										}
									>
										Atlanta, GA
									</Typography>

									<Typography
										variant="subtitle1"
										align="left"
										// style={{
										// 	color: darkMode
										// 		? // ? "rgba(71, 71, 71, 0.6)"
										// 		  "rgba(184, 184, 184, 0.6)"
										// 		: "#ffffffa6",
										// }}
										className={
											darkMode
												? classes.jobDescriptionDark
												: classes.jobDescription
										}
									>
										<div>
											• Filled in as manager when needed -
											responsibilities included resolving
											customer issues, entering shift
											reports, and taking inventory
										</div>
										<div>
											• Developed valuable soft skills,
											which included communication,
											teamwork, multitasking, and working
											under pressure
										</div>
										<div>
											• Trained new hires and created
											training materials along with a
											checklist of server side-duties
										</div>
									</Typography>
								</Box>
								<Typography
									variant="h6"
									className={`${classes.timeLineYearE} ${classes.timeLineItemE}`}
								>
									2018
								</Typography>
								<Box
									component="div"
									className={classes.timeLineItemE}
								>
									<Typography
										variant="h5"
										align="center"
										className={
											darkMode
												? classes.subHeadingEDark
												: classes.subHeadingE
										}
									>
										Elev8 Hire Solutions{" "}
									</Typography>
									<Typography
										variant="h6"
										align="center"
										className={
											darkMode
												? classes.subHeading2EDark
												: classes.subHeading2E
										}
									>
										IT Recruiter
									</Typography>
									<Typography
										variant="body1"
										align="center"
										// style={{
										// 	color: "#234",
										// 	// backgroundColor: "white",
										// }}
										className={
											darkMode
												? classes.locationEDark
												: classes.locationE
										}
									>
										Atlanta, GA
									</Typography>

									<Typography
										variant="subtitle1"
										align="left"
										// style={{
										// 	color: darkMode
										// 		? // ? "rgba(71, 71, 71, 0.6)"
										// 		  "rgba(0, 0, 0, 0.5)"
										// 		: "rgba(71, 71, 71, 0.91)",
										// }}

										// style={{
										// 	color: darkMode
										// 		? // ? "rgba(71, 71, 71, 0.6)"
										// 		  "rgba(255, 255, 255, 0.65)"
										// 		: "#ffffffa6",
										// }}
										className={
											darkMode
												? classes.jobDescriptionDark
												: classes.jobDescription
										}
									>
										<div>
											• Performed full sles recruiting
											lifecycle - from prospecting, job
											selling, screening, offer
											negotiation, and onboarding
										</div>
										<div>
											• Communicated with hiring managers
											to discover project requirements and
											ideal candidates
										</div>
										<div>
											• Maintained an accurate candidate
											tracking system
										</div>
									</Typography>
								</Box>
							</Grid>
						</Grid>
						{/* </Box> */}
					</Grid>
					{/* </Box> */}
				</Grid>
			</Paper>
		</ThemeProvider>
	);
};

export default Resume;

// import Navbar from "./Navbar";
// import Navbar3 from "./Navbar3";
// import {
// 	makeStyles,
// 	responsiveFontSizes,
// 	createMuiTheme,
// } from "@material-ui/core/styles";
// import {
// 	Typography,
// 	Box,
// 	Paper,
// 	Grid,
// 	Card,
// 	Container,
// 	Link,
// 	CssBaseline,
// 	ThemeProvider,
// } from "@material-ui/core";
// import { Link as RouterLink } from "react-router-dom";

// import GetAppIcon from "@material-ui/icons/GetApp";
// // import { FullscreenExit } from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({
// 	mainContainer: {
// 		background: "#234",
// 		width: "100vw",
// 		// margin: "0",
// 		// paddingTop: "10%",
// 		// transform: "translateY(6rem)",
// 	},
// 	heading: {
// 		color: "sandybrown",
// 		// padding: "1rem 0 1rem",
// 		marginTop: ".2rem",
// 		paddingBottom: ".5rem",
// 		textTransform: "uppercase",
// 		// zIndex: "1",
// 	},
// 	downloadResume: {
// 		display: "flex",
// 		paddingTop: "21vw",
// 		paddingBottom: ".75rem",
// 		maxHeight: "14vh",
// 		minHeight: "24vw",
// 		// alignItems: "center",
// 		// padding: "4rem 0 1.2rem",

// 		background: "lightslategray",
// 		[theme.breakpoints.up("sm")]: {
// 			paddingTop: "13vw",
// 			paddingBottom: ".10vh",
// 			maxHeight: "15vh",
// 			// height: "99%",
// 			// backgroundColor: "red",
// 			minHeight: "14vh",
// 			alignItems: "flex-end",
// 			// maxHeight: "11vh",
// 			// height: "7vh",
// 			// "&:after": {
// 			// 	content: "''",
// 			// 	height: "98%",
// 			// 	clear: "both",
// 			// },
// 		},
// 		[theme.breakpoints.up("md")]: {
// 			paddingTop: "8vw",
// 			paddingBottom: "1rem",
// 			// height: "99%",
// 			maxHeight: "8rem",
// 			backgroundColor: "purple",
// 			// "&:after": {
// 			// 	content: "''",
// 			// 	height: "98%",
// 			// 	clear: "both",
// 			// },
// 		},
// 	},
// 	downloadResumeText: {
// 		// width: "50%",
// 		// paddingTop: "1rem",
// 		color: "white",

// 		// background: "pink",
// 	},
// 	boxTechnologies: {
// 		// color: "cadetblue",
// 		// padding: "1rem 0 0",
// 		// textTransform: "uppercase",
// 		// margin: "0 10%",
// 		background: "lightgrey",
// 		// padding: "1.5em ",
// 		marginTop: "1rem",
// 		padding: ".5rem 1rem 2rem",
// 		// marginRight: "1.4rem",
// 	},
// 	heading2Title: {
// 		// paddingTop: ".75rem",
// 		color: "#234",
// 		textTransform: "uppercase",
// 	},
// 	subHeading2: {
// 		color: "peachpuff",
// 		padding: "0",
// 		// textTransform: "upper"
// 	},
// 	subHeading: {
// 		color: "white",
// 		padding: "0",
// 		textTransform: "uppercase",
// 	},
// 	timeLineBox: {
// 		postion: "relative",
// 		transform: "translate(0px, 1.5rem)",

// 		padding: ".5rem 0 1.5rem",
// 		margin: "0 auto",
// 		// backgroundColor: "pink",
// 		"&:before": {
// 			content: "''",
// 			position: "absolute",
// 			height: "86%",
// 			border: "1px solid lightgrey ",
// 			right: "40px",
// 			// top: "24px",
// 			// top: 0,
// 			transform: "translate(0px, 3.3rem)",
// 		},
// 		"&:after": {
// 			content: "''",
// 			// position: "absolute",
// 			// top: "60px",
// 			// clear: "both",
// 		},
// 		[theme.breakpoints.up("md")]: {
// 			padding: "2rem",

// 			"&:before": {
// 				transform: "translate(0px, 5rem)",
// 				height: "81%",
// 				left: "calc(50% - 1px)",
// 				right: "auto",
// 				// zIndex: "-1",
// 			},
// 			// "&:after": {
// 			// 	content: "''",
// 			// height: "15%",
// 			// 	clear: "both",
// 			// 	// zIndex: "-1",
// 			// },
// 		},
// 	},
// 	timeLineItem: {
// 		padding: "1rem",
// 		// borderBottom: "8px solid tan",
// 		position: "relative",
// 		margin: ".6rem 3.3rem .6rem .6rem",
// 		clear: "both",
// 		"&:after": {
// 			content: "''",
// 			position: "absolute",
// 		},
// 		"&:before": {
// 			content: "''",
// 			position: "absolute",
// 			right: "-0.025rem",
// 			top: "calc(50% - 5px)",
// 			borderStyle: "solid",
// 			borderColor: "sandybrown sandybrown transparent transparent",
// 			borderWidth: ".44rem",
// 			transform: "rotate(45deg)",
// 		},
// 		[theme.breakpoints.up("md")]: {
// 			width: "44%",
// 			margin: "1rem",
// 			"&:nth-of-type(2n)": {
// 				float: "right",
// 				margin: "1rem",
// 				borderColor: "tan",
// 			},
// 			"&:nth-of-type(2n):before": {
// 				right: "auto",
// 				left: "-0.625rem",
// 				borderColor: "transparent transparent sandybrown sandybrown",
// 			},
// 		},
// 	},
// 	timeLineYear: {
// 		textAlign: "center",
// 		maxWidth: "6.5rem",
// 		margin: "0 3rem 0 auto",
// 		fontSize: "1.8rem",
// 		background: "grey",
// 		color: "#234",
// 		lineHeight: 1,
// 		padding: "0.6rem",
// 		// zIndex: "1",
// 		"&:before": {
// 			display: "none",
// 		},
// 		[theme.breakpoints.up("md")]: {
// 			textAlign: "center",
// 			margin: "0 auto",
// 			zIndex: "1",
// 			"&:nth-of-type(2n)": {
// 				float: "none",
// 				margin: "0 auto",
// 			},
// 			"&:nth-of-type(2n):before": {
// 				display: "none",
// 			},
// 		},
// 	},
// 	subHeading2E: {
// 		color: "#234",
// 	},
// 	subHeadingE: {
// 		color: "sandybrown",
// 		padding: "0",
// 		textTransform: "uppercase",
// 	},
// 	timeLineBoxE: {
// 		postion: "relative",
// 		// display: "flex",
// 		// flexGrow: "1",
// 		flexDirection: "column",
// 		// transform: "translate(0px, .5rem)",
// 		// height: "96%",
// 		padding: "1.3rem",
// 		margin: "0 auto",
// 		// backgroundColor: "purple",
// 		"&:before": {
// 			content: "''",
// 			position: "absolute",
// 			height: "93vh",
// 			maxHeight: "95vh",
// 			border: "1px solid darkgrey ",
// 			right: "40px",
// 			// paddingBottom: "40px",
// 			// top: "44px",
// 			// top: 0,
// 			transform: "translate(0px, 1.2rem)",
// 		},

// 		[theme.breakpoints.up("sm")]: {
// 			padding: "1rem",
// 			// height: "99%",

// 			"&:before": {
// 				// transform: "translate(0px, 6rem)",
// 				height: "64%",
// 				// maxHeight: "51%",
// 				// left: "calc(50% - 1px)",
// 				right: "40px",
// 				// zIndex: "-1",
// 			},
// 			// "&:after": {
// 			// 	content: "''",
// 			// 	height: "98%"
// 			// 	clear: "both",
// 			// },
// 		},

// 		[theme.breakpoints.up("md")]: {
// 			padding: "1rem",
// 			// height: "99%",

// 			"&:before": {
// 				// transform: "translate(0px, 6rem)",
// 				height: "56%",
// 				maxHeight: "70%",
// 				left: "calc(50% - 1px)",
// 				right: "auto",
// 				// zIndex: "-1",
// 			},
// 			// "&:after": {
// 			// 	content: "''",
// 			// 	height: "98%",
// 			// 	clear: "both",
// 			// },
// 		},
// 	},
// 	timeLineItemE: {
// 		padding: "1rem",
// 		// borderBottom: "2px solid tan",
// 		position: "relative",
// 		margin: ".6rem 3rem .6rem .6rem",
// 		clear: "both",
// 		// backgroundColor: "white",
// 		"&:after": {
// 			content: "''",
// 			position: "absolute",
// 		},
// 		"&:before": {
// 			content: "''",
// 			position: "absolute",
// 			right: "-0.025rem",
// 			top: "calc(50% - 5px)",
// 			borderStyle: "solid",
// 			borderColor: "cadetblue cadetblue transparent transparent",
// 			borderWidth: "0.44rem",
// 			transform: "rotate(45deg)",
// 		},
// 		[theme.breakpoints.up("md")]: {
// 			width: "44%",
// 			margin: "1rem",
// 			"&:nth-of-type(2n)": {
// 				float: "right",
// 				margin: "1rem",
// 				borderColor: "tan",
// 			},
// 			"&:nth-of-type(2n):before": {
// 				right: "auto",
// 				left: "-0.625rem",
// 				borderColor: "transparent transparent cadetblue cadetblue",
// 			},
// 		},
// 	},
// 	timeLineYearE: {
// 		textAlign: "center",
// 		maxWidth: "6.5rem",
// 		margin: "0 2.5rem 0 auto",
// 		fontSize: "1.8rem",
// 		background: "#234",
// 		color: "lightgrey",
// 		lineHeight: 1,
// 		padding: ".6rem",
// 		// zIndex: "1",
// 		"&:before": {
// 			display: "none",
// 		},
// 		[theme.breakpoints.up("md")]: {
// 			textAlign: "center",
// 			margin: "0 auto",
// 			zIndex: "1",
// 			"&:nth-of-type(2n)": {
// 				float: "none",
// 				margin: "0 auto",
// 			},
// 			"&:nth-of-type(2n):before": {
// 				display: "none",
// 			},
// 		},
// 	},
// 	papersGridContainer: {
// 		display: "flex",
// 		// justify: "space-evenly",
// 		width: "100%",
// 		padding: "1.2em 1em 3em",
// 		// alignItems: "flex-start",
// 		// backgroundColor: "purple",
// 		// wrap: "wrap",
// 		// gridItem: {
// 		// background: "black",
// 	},
// 	frontEndGridItem: {
// 		// display: "flex",
// 		// flexWrap: "wrap",
// 		// justify: "space-evenly",
// 		// alignItems: "center",
// 		// backgroundColor: "teal",
// 		// padding: "0 1.3em",
// 	},
// 	backEndGridItem: {
// 		// backgroundColor: "lightgrey",
// 		alignItems: "center",
// 	},
// 	toolsGridItem: {
// 		// backgroundColor: "peachpuff",
// 		alignItems: "center",
// 	},
// 	paper: {
// 		color: "cadetblue",
// 		fontSize: "1.1em",
// 		textAlign: "center",
// 		padding: "theme.spacing(2.5)",
// 		overflow: "hidden",
// 		textOverflow: "ellipsis",
// 		// width: "1rem",
// 	},
// 	experienceBox: {
// 		width: "100%",
// 		paddingTop: "1.5rem",
// 		paddingBottom: "4rem",
// 		backgroundColor: "white",
// 		// marginBottom: "10rem",
// 		// textTransform: "uppercase",
// 		color: "#234",
// 		// [theme.breakpoints.up("md")]: {
// 		// 	paddingBottom: "19rem",

// 		// 	"&:before": {
// 		// 		transform: "translate(0px, 5rem)",
// 		// 		height: "78%",
// 		// 		left: "calc(50% - 1px)",
// 		// 		right: "auto",
// 		// 		// zIndex: "-1",
// 		// 	},
// 		// 	"&:after": {
// 		// 		content: "''",
// 		// 		height: "15%",
// 		// 		clear: "both",
// 		// 		// zIndex: "-1",
// 		// 		background: "red",
// 		// 	},
// 		// },
// 		[theme.breakpoints.up("md")]: {
// 			paddingBottom: "2rem",
// 			// height: "99%",

// 			// "&:after": {
// 			// 	content: "''",
// 			// 	height: "98%",
// 			// 	clear: "both",
// 			// },
// 		},
// 	},
// }));

// // const LinkBehavior = React.forwardRef((props, ref) => (
// // 	<RouterLink ref={ref} to="../images/Boone.png" {...props} />
// // ));

// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

// const Resume = () => {
// 	const classes = useStyles();

// 	return (
// 		<ThemeProvider theme={theme}>
// 			<CssBaseline />
// 			<Grid
// 				container
// 				// direction="column"
// 				// justify="center"
// 				// component="header"
// 				className={classes.mainContainer}
// 			>
// 				<Grid
// 					item
// 					container
// 					className={classes.downloadResume}
// 					justify="center"
// 					alignContent="center"
// 					// style={{ backgroundColor: "green" }}
// 					spacing={2}
// 				>
// 					<Grid item>
// 						<GetAppIcon style={{ color: "cadetblue" }} />
// 					</Grid>
// 					<Grid item>
// 						<Link
// 							href="https://drive.google.com/open?id=1o9VgNvrVhskDqi76UCsFQiByLeDUv0BZ"
// 							// onClick={preventDefault}
// 							// variant="body2"
// 						>
// 							{/* {3variant="body2"'} */}
// 							<Typography variant="h5">
// 								{" "}
// 								Download Resume
// 							</Typography>
// 						</Link>
// 					</Grid>
// 				</Grid>

// 				{/* <Box component="div" className={classes.timeLineBox}> */}
// 				<Grid item container className={classes.timeLineBox}>
// 					<Grid item xs={12}>
// 						<Typography
// 							variant="h4"
// 							align="center"
// 							className={classes.heading}
// 						>
// 							Education
// 						</Typography>
// 						<Typography
// 							variant="h2"
// 							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
// 						>
// 							2019
// 						</Typography>

// 						<Box component="div" className={classes.timeLineItem}>
// 							<Typography
// 								variant="h5"
// 								align="center"
// 								className={classes.subHeading}
// 							>
// 								Digital Crafts
// 							</Typography>
// 							<Typography
// 								variant="h6"
// 								align="center"
// 								className={classes.subHeading2}
// 								// style="{{ color: "tan"}}
// 							>
// 								Web Development Bootcamp
// 							</Typography>
// 							<Typography
// 								variant="body1"
// 								align="center"
// 								style={{ color: "cadetblue" }}
// 							>
// 								Atlanta, GA
// 							</Typography>

// 							<Typography
// 								variant="subtitle1"
// 								align="center"
// 								style={{ color: "grey" }}
// 							>
// 								Certificate in Full Stack software development
// 							</Typography>
// 						</Box>
// 						<Typography
// 							variant="h2"
// 							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
// 						>
// 							2013
// 						</Typography>
// 						<Box component="div" className={classes.timeLineItem}>
// 							<Typography
// 								variant="h5"
// 								align="center"
// 								className={classes.subHeading}
// 							>
// 								Georgia Institute of Technology
// 							</Typography>
// 							<Typography
// 								variant="h6"
// 								align="center"
// 								className={classes.subHeading2}
// 								// style="{{ color: "tan"}}
// 							>
// 								Scheller College of Business
// 							</Typography>
// 							<Typography
// 								variant="body1"
// 								align="center"
// 								style={{ color: "cadetblue" }}
// 							>
// 								Atlanta, GA
// 							</Typography>

// 							<Typography
// 								variant="subtitle1"
// 								align="center"
// 								style={{ color: "grey" }}
// 							>
// 								Master of Business Administration
// 							</Typography>
// 						</Box>
// 						<Typography
// 							variant="h2"
// 							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
// 						>
// 							2007
// 						</Typography>
// 						<Box component="div" className={classes.timeLineItem}>
// 							<Typography
// 								variant="h5"
// 								align="center"
// 								className={classes.subHeading}
// 							>
// 								Georgia Institute of Technology
// 							</Typography>

// 							<Typography
// 								variant="h6"
// 								align="center"
// 								className={classes.subHeading2}
// 								// style="{{ color: "tan"}}
// 							>
// 								School of Electrical and Computer Engineering
// 							</Typography>

// 							<Typography
// 								variant="body1"
// 								align="center"
// 								style={{ color: "cadetblue" }}
// 							>
// 								Atlanta, GA
// 							</Typography>

// 							<Typography
// 								variant="subtitle1"
// 								align="center"
// 								style={{ color: "grey" }}
// 							>
// 								Bachelor of Science in Electrical Engineering
// 							</Typography>
// 						</Box>
// 					</Grid>
// 				</Grid>
// 				{/* </Box> */}
// 				{/* <Box className={classes.boxTechnologies} justifyContent="center"> */}
// 				<Grid
// 					item
// 					container
// 					spacing={2}
// 					justify="center"
// 					// alignItems="flex-start"
// 					alignItems="
// 					flex-end"
// 					// alignContent="center"
// 					className={classes.papersGridContainer}
// 					className={classes.boxTechnologies}
// 					// wrap="wrap"
// 					// style={{ backgroundColor: "purple" }}
// 				>
// 					<Grid item container justify="center">
// 						<Grid item>
// 							<Typography
// 								variant="h4"
// 								align="center"
// 								className={classes.heading2Title}
// 								display="block"
// 								// style={{ color: "red" }}
// 							>
// 								Technologies
// 							</Typography>
// 						</Grid>
// 					</Grid>
// 					<Grid
// 						item
// 						justify="center"
// 						container
// 						xs={12}
// 						sm={6}
// 						md={4}
// 						spacing={1}
// 						className={classes.frontEndGridItem}
// 					>
// 						{/* <Box className="feBox"></Box> */}
// 						<Grid item xs={12}>
// 							<Typography align="center">Front End</Typography>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={3}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								HTML5
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={3}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								CSS3
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								Javascript
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								Typescript
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								React
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								React Native
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								Angular
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								Material-UI
// 							</Paper>
// 						</Grid>
// 					</Grid>

// 					<Grid
// 						item
// 						xs={12}
// 						sm={6}
// 						md={4}
// 						container
// 						spacing={1}
// 						justify="center"
// 						className={classes.backEndGridItem}
// 					>
// 						<Grid item xs={12}>
// 							<Typography align="center">Back End</Typography>
// 						</Grid>

// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								<div>Node</div>
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								<div>Express</div>
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								Python
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								PostgreSQL
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								SQL
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								GraphQL
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								WebSockets
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								NGINX
// 							</Paper>
// 						</Grid>
// 					</Grid>
// 					<Grid
// 						item
// 						xs={12}
// 						sm={6}
// 						md={4}
// 						container
// 						justify="center"
// 						spacing={1}
// 						className={classes.toolsGridItem}
// 					>
// 						<Grid item xs={12}>
// 							<Typography align="center">Tools</Typography>
// 						</Grid>

// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								VS Code
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								AWS
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								NPM
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								Git
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								GitHub
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								Jasmine
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								Mocha
// 							</Paper>
// 						</Grid>
// 						<Grid item xs={4} sm={4} md={4}>
// 							<Paper
// 								elevation={2}
// 								variant="outlined"
// 								className={classes.paper}
// 								// square
// 							>
// 								Webpack
// 							</Paper>
// 						</Grid>

// 						{/* <Grid item xs={4} sm={4} md={4}>
// 								<Paper
// 									elevation={2}
// 									variant="outlined"
// 									className={classes.paper}
// 									// square
// 								>
// 									html
// 								</Paper>
// 							</Grid> */}
// 					</Grid>
// 					{/* </Grid> */}
// 				</Grid>
// 				{/* </Box> */}
// 				{/* <Box className={classes.experienceBox}> */}
// 				<Grid
// 					item
// 					container
// 					className={classes.experienceBox}
// 					justify="center"
// 				>
// 					<Grid item>
// 						<Typography
// 							variant="h4"
// 							align="center"
// 							style={{
// 								textTransform: "uppercase",
// 								color: "cadetblue",
// 							}}
// 						>
// 							Experience
// 						</Typography>
// 						{/* {/* </Grid> */}
// 						{/* <Box component="div" className={classes.timeLineBoxE}> */}
// 						<Grid item className={classes.timeLineBoxE}>
// 							<Typography
// 								variant="h2"
// 								className={`${classes.timeLineYearE} ${classes.timeLineItemE}`}
// 							>
// 								2020
// 							</Typography>
// 							<Box
// 								component="div"
// 								className={classes.timeLineItemE}
// 							>
// 								<Typography
// 									variant="h5"
// 									align="center"
// 									className={classes.subHeadingE}
// 								>
// 									Ton Ton Ramen & Yakitori
// 								</Typography>
// 								<Typography
// 									variant="h6"
// 									align="center"
// 									className={classes.subHeading2E}
// 									// style="{{ color: "tan"}}
// 								>
// 									server
// 								</Typography>
// 								<Typography
// 									variant="body1"
// 									align="center"
// 									style={{ color: "#234" }}
// 								>
// 									Atlanta, GA
// 								</Typography>

// 								<Typography
// 									variant="subtitle1"
// 									align="left"
// 									style={{ color: "grey" }}
// 								>
// 									<div>
// 										• Filled in as manager when needed -
// 										responsibilities included resolving
// 										customer issues, entering shift reports,
// 										and taking inventory
// 									</div>
// 									<div>
// 										• Developed valuable soft skills, which
// 										included communication, teamwork,
// 										multitasking, and working under pressure
// 									</div>
// 									<div>
// 										• Trained new hires and created training
// 										materials along with a checklist of
// 										server side-duties
// 									</div>
// 								</Typography>
// 							</Box>
// 							<Typography
// 								variant="h2"
// 								className={`${classes.timeLineYearE} ${classes.timeLineItemE}`}
// 							>
// 								2018
// 							</Typography>
// 							<Box
// 								component="div"
// 								className={classes.timeLineItemE}
// 							>
// 								<Typography
// 									variant="h5"
// 									align="center"
// 									className={classes.subHeadingE}
// 								>
// 									Elev8 Hire Solutions{" "}
// 								</Typography>
// 								<Typography
// 									variant="h6"
// 									align="center"
// 									className={classes.subHeading2E}
// 								>
// 									IT Recruiter
// 								</Typography>
// 								<Typography
// 									variant="body1"
// 									align="center"
// 									style={{
// 										color: "#234",
// 										// backgroundColor: "white",
// 									}}
// 								>
// 									Atlanta, GA
// 								</Typography>

// 								<Typography
// 									variant="subtitle1"
// 									align="left"
// 									style={{
// 										color: "grey",
// 										// backgroundColor: "yellow",
// 									}}
// 								>
// 									<div>
// 										• Performed full sles recruiting
// 										lifecycle - from prospecting, job
// 										selling, screening, offer negotiation,
// 										and onboarding
// 									</div>
// 									<div>
// 										• Communicated with hiring managers to
// 										discover project requirements and ideal
// 										candidates
// 									</div>
// 									<div>
// 										• Maintained an accurate candidate
// 										tracking system
// 									</div>
// 								</Typography>
// 							</Box>
// 						</Grid>
// 					</Grid>
// 					{/* </Box> */}
// 				</Grid>
// 				{/* </Box> */}
// 			</Grid>
// 		</ThemeProvider>
// 	);
// };

// export default Resume;
