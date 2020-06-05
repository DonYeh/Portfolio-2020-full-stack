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

import GetAppIcon from "@material-ui/icons/GetApp";
// import { FullscreenExit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		width: "100vw",
		background: "#234",
	},
	heading: {
		color: "sandybrown",
		// padding: "1rem 0 1rem",
		// marginTop: ".3rem",
		padding: "1.2rem 0rem",
		// paddingBottom: "1.2rem",
		textTransform: "uppercase",
		// zIndex: "1",
	},
	downloadResume: {
		display: "flex",
		paddingTop: "10vh",
		paddingBottom: "2vh",
		maxHeight: "18vh",
		minHeight: "14vh",
		// alignItems: "center",
		// padding: "4rem 0 1.2rem",

		background: "lightslategray",

		[theme.breakpoints.down("sm")]: {
			// paddingTop: "18vw",
			// paddingTop: "10.5vh",
			paddingBottom: ".2vh",
			// maxHeight: "30vh",
			// height: "99%",
			// backgroundColor: "red",
			minHeight: "14vh",
			alignItems: "flex-end",
			// maxHeight: "11vh",
			// height: "7vh",
			// "&:after": {
			// 	content: "''",
			// 	height: "98%",
			// 	clear: "both",
			// },
		},
		[theme.breakpoints.up("sm")]: {
			paddingTop: "13vw",
			paddingBottom: ".10vh",
			maxHeight: "15vh",
			// height: "99%",
			// backgroundColor: "red",
			minHeight: "14vh",
			alignItems: "flex-end",
			// maxHeight: "11vh",
			// height: "7vh",
			// "&:after": {
			// 	content: "''",
			// 	height: "98%",
			// 	clear: "both",
			// },
		},
		[theme.breakpoints.up("md")]: {
			paddingTop: "4vw",
			// paddingBottom: ".2rem",
			// height: "99%",
			// maxHeight: "4rem",
			backgroundColor: "purple",
			// "&:after": {
			// 	content: "''",
			// 	height: "98%",
			// 	clear: "both",
			// },
		},
	},
	downloadResumeText: {
		// width: "50%",
		// paddingTop: "1rem",
		color: "white",

		// background: "pink",
	},
	boxTechnologies: {
		// color: "cadetblue",
		// padding: "1rem 0 0",
		// textTransform: "uppercase",
		// margin: "0 10%",
		background: "lightgrey",
		// padding: "1.5em ",
		marginTop: "1rem",
		padding: ".5rem 1rem 2rem",
		// marginRight: "1.4rem",
	},
	heading2Title: {
		// paddingTop: ".75rem",
		color: "#234",
		textTransform: "uppercase",
	},
	subHeading2: {
		color: "peachpuff",
		padding: "0",
		// textTransform: "upper"
	},
	subHeading: {
		color: "white",
		padding: "0",
		textTransform: "uppercase",
	},
	timeLineBox: {
		display: "flex",
		postion: "relative",
		width: "100vw",
		// transform: "translate(0px, 1.2rem)",

		padding: ".5rem 0 1rem",
		// margin: "0 auto",
		// backgroundColor: "pink",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "98%",
			// maxHeight: ""
			border: "1px solid lightgrey ",
			right: "5vw",
			// top: "24px",
			// top: 0,
			transform: "translate(0rem, 4rem)",
		},
		"&:after": {
			content: "''",
			// position: "absolute",
			// top: "60px",
			// clear: "both",
		},
		[theme.breakpoints.down("sm")]: {
			// padding: "1rem",
			// height: "99%",

			"&:before": {
				// transform: "translate(0px, 6rem)",
				// height: "64%",
				// maxHeight: "51%",
				content: "''",
				position: "absolute",
				// height: "135vh",
				minHeight: "93vh",
				maxHeight: "115vh",
				border: "1px solid lightgrey ",
				right: "7vw",

				// left: "calc(50% - 1px)",

				// zIndex: "-1",
			},
			// "&:after": {
			// 	content: "''",
			// 	height: "98%"
			// 	clear: "both",
			// },
		},
		[theme.breakpoints.up("sm")]: {
			// padding: "1rem",
			// height: "99%",

			"&:before": {
				// transform: "translate(0px, 6rem)",
				height: "60%",
				// maxHeight: "51%",
				// left: "calc(50% - 1px)",
				right: "3vw",
				// zIndex: "-1",
			},
			// "&:after": {
			// 	content: "''",
			// 	height: "98%"
			// 	clear: "both",
			// },
		},
		[theme.breakpoints.up("md")]: {
			padding: "2rem",

			"&:before": {
				transform: "translate(0px, 5rem)",
				height: "81%",
				left: "calc(50% - 1px)",
				right: "auto",
				// zIndex: "-1",
			},
			// "&:after": {
			// 	content: "''",
			// height: "15%",
			// 	clear: "both",
			// 	// zIndex: "-1",
			// },
		},
	},
	timeLineItem: {
		padding: "2em 5em 1em 2em",
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
			right: "3rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "sandybrown sandybrown transparent transparent",
			borderWidth: ".44rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.625rem",
				borderColor: "transparent transparent sandybrown sandybrown",
			},
		},
	},
	timeLineYear: {
		textAlign: "center",
		maxWidth: "4.5rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.3rem",
		background: "grey",
		color: "#234",
		lineHeight: 1,
		padding: "0.6rem",
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
	subHeading2E: {
		color: "#234",
	},
	subHeadingE: {
		color: "sandybrown",
		padding: "0",
		textTransform: "uppercase",
	},
	timeLineBoxE: {
		postion: "relative",
		// display: "flex",
		// flexGrow: "1",
		flexDirection: "column",
		// transform: "translate(0px, .5rem)",
		// height: "96%",
		padding: "1.3rem",
		margin: "0 auto",
		// backgroundColor: "purple",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "93vh",
			maxHeight: "95vh",
			border: "1px solid darkgrey ",
			right: "4.3vw",
			// paddingBottom: "40px",
			// top: "44px",
			// top: 0,
			// transform: "translate(0px, 1.2rem)",
		},

		[theme.breakpoints.down("sm")]: {
			padding: "1rem",
			// height: "99%",

			"&:before": {
				// transform: "translate(0px, 6rem)",
				// height: "64%",
				// maxHeight: "51%",
				// left: "calc(50% - 1px)",
				height: "135vh",
				maxHeight: "93vh",
				right: "7vw",
				// minHeight: "118vh",
				// zIndex: "-1",
			},
			// "&:after": {
			// 	content: "''",
			// 	height: "98%"
			// 	clear: "both",
			// },
		},
		[theme.breakpoints.up("sm")]: {
			padding: "1rem",
			// height: "99%",

			"&:before": {
				// transform: "translate(0px, 6rem)",
				height: "64%",
				// maxHeight: "51%",
				// left: "calc(50% - 1px)",
				right: "3vw",
				// zIndex: "-1",
			},
			// "&:after": {
			// 	content: "''",
			// 	height: "98%"
			// 	clear: "both",
			// },
		},

		[theme.breakpoints.up("md")]: {
			padding: "1rem",
			// height: "99%",

			"&:before": {
				// transform: "translate(0px, 6rem)",
				height: "56%",
				maxHeight: "70%",
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
		padding: "2em 8em 1em 2em",
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
			right: "1.8rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "cadetblue cadetblue transparent transparent",
			borderWidth: "0.44rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "tan",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.625rem",
				borderColor: "transparent transparent cadetblue cadetblue",
			},
		},
	},
	timeLineYearE: {
		textAlign: "center",
		maxWidth: "4.5rem",
		margin: "0 2rem 0 auto",
		fontSize: "1.3rem",
		background: "#234",
		color: "lightgrey",
		lineHeight: 1,
		padding: ".6rem",
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
		color: "cadetblue",
		fontSize: "1.1em",
		textAlign: "center",
		padding: "theme.spacing(2.5)",
		overflow: "hidden",
		textOverflow: "ellipsis",
		// width: "1rem",
	},
	experienceBox: {
		width: "100%",
		paddingTop: "1.5rem",
		paddingBottom: "4rem",
		backgroundColor: "white",
		// marginBottom: "10rem",
		// textTransform: "uppercase",
		color: "#234",
		// [theme.breakpoints.up("md")]: {
		// 	paddingBottom: "19rem",

		// 	"&:before": {
		// 		transform: "translate(0px, 5rem)",
		// 		height: "78%",
		// 		left: "calc(50% - 1px)",
		// 		right: "auto",
		// 		// zIndex: "-1",
		// 	},
		// 	"&:after": {
		// 		content: "''",
		// 		height: "15%",
		// 		clear: "both",
		// 		// zIndex: "-1",
		// 		background: "red",
		// 	},
		// },
		[theme.breakpoints.up("md")]: {
			paddingBottom: "2rem",
			// height: "99%",

			// "&:after": {
			// 	content: "''",
			// 	height: "98%",
			// 	clear: "both",
			// },
		},
	},
}));

// const LinkBehavior = React.forwardRef((props, ref) => (
// 	<RouterLink ref={ref} to="../images/Boone.png" {...props} />
// ));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Resume = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid
				container
				// direction="column"
				// justify="center"
				// component="header"
				className={classes.mainContainer}
			>
				<Grid
					item
					container
					className={classes.downloadResume}
					justify="center"
					alignContent="center"
					// style={{ backgroundColor: "green" }}
				>
					<Grid item>
						<GetAppIcon style={{ color: "cadetblue" }} />
					</Grid>
					<Grid item>
						<Link
							href="https://drive.google.com/open?id=1o9VgNvrVhskDqi76UCsFQiByLeDUv0BZ"
							// onClick={preventDefault}
							// variant="body2"
						>
							{/* {3variant="body2"'} */}
							<Typography variant="h5">
								{" "}
								Download Resume
							</Typography>
						</Link>
					</Grid>
				</Grid>

				{/* <Box component="div" className={classes.timeLineBox}> */}
				<Grid item container className={classes.timeLineBox}>
					<Grid item xs={12}>
						<Typography
							variant="h4"
							align="center"
							className={classes.heading}
						>
							Education
						</Typography>
						<Typography
							variant="h3"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
						>
							2019
						</Typography>

						<Box component="div" className={classes.timeLineItem}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeading}
							>
								Digital Crafts
							</Typography>
							<Typography
								variant="h6"
								align="center"
								className={classes.subHeading2}
								// style="{{ color: "tan"}}
							>
								Web Development Bootcamp
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "cadetblue" }}
							>
								Atlanta, GA
							</Typography>

							<Typography
								variant="subtitle1"
								align="center"
								style={{ color: "grey" }}
							>
								Certificate in Full Stack software development
							</Typography>
						</Box>
						<Typography
							variant="h3"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
						>
							2013
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeading}
							>
								Georgia Institute of Technology
							</Typography>
							<Typography
								variant="h6"
								align="center"
								className={classes.subHeading2}
								// style="{{ color: "tan"}}
							>
								Scheller College of Business
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "cadetblue" }}
							>
								Atlanta, GA
							</Typography>

							<Typography
								variant="subtitle1"
								align="center"
								style={{ color: "grey" }}
							>
								Master of Business Administration
							</Typography>
						</Box>
						<Typography
							variant="h3"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
						>
							2007
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeading}
							>
								Georgia Institute of Technology
							</Typography>

							<Typography
								variant="h6"
								align="center"
								className={classes.subHeading2}
								// style="{{ color: "tan"}}
							>
								School of Electrical and Computer Engineering
							</Typography>

							<Typography
								variant="body1"
								align="center"
								style={{ color: "cadetblue" }}
							>
								Atlanta, GA
							</Typography>

							<Typography
								variant="subtitle1"
								align="center"
								style={{ color: "grey" }}
							>
								Bachelor of Science in Electrical Engineering
							</Typography>
						</Box>
					</Grid>
				</Grid>
				{/* </Box> */}
				{/* <Box className={classes.boxTechnologies} justifyContent="center"> */}
				<Grid
					item
					container
					// spacing={2}
					justify="center"
					// alignItems="flex-start"
					alignItems="
					flex-end"
					// alignContent="center"
					// className={classes.papersGridContainer}
					className={classes.boxTechnologies}
					// wrap="wrap"
					// style={{ backgroundColor: "purple" }}
				>
					<Grid item container justify="center">
						<Grid item>
							<Typography
								variant="h4"
								align="center"
								className={classes.heading2Title}
								display="block"
								// style={{ color: "red" }}
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
							<Typography align="center">Front End</Typography>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={3}
								variant="outlined"
								className={classes.paper}
								// square
							>
								HTML5
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={3}
								variant="outlined"
								className={classes.paper}
								// square
							>
								CSS3
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								Javascript
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								Typescript
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								React
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								React Native
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								Angular
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								Material-UI
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
							<Typography align="center">Back End</Typography>
						</Grid>

						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								<div>Node</div>
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								<div>Express</div>
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								Python
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								PostgreSQL
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								SQL
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								GraphQL
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								WebSockets
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
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
							<Typography align="center">Tools</Typography>
						</Grid>

						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								VS Code
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
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
								// square
							>
								NPM
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								Git
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								GitHub
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								Jasmine
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
								// square
							>
								Mocha
							</Paper>
						</Grid>
						<Grid item xs={4} sm={4} md={4}>
							<Paper
								elevation={2}
								variant="outlined"
								className={classes.paper}
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
					className={classes.experienceBox}
					justify="center"
				>
					<Grid item>
						<Typography
							variant="h4"
							align="center"
							style={{
								textTransform: "uppercase",
								color: "cadetblue",
							}}
						>
							Experience
						</Typography>
						{/* {/* </Grid> */}
						{/* <Box component="div" className={classes.timeLineBoxE}> */}
						<Grid item className={classes.timeLineBoxE}>
							<Typography
								variant="h3"
								className={`${classes.timeLineYearE} ${classes.timeLineItemE}`}
							>
								2020
							</Typography>
							<Box
								component="div"
								className={classes.timeLineItemE}
							>
								<Typography
									variant="h5"
									align="center"
									className={classes.subHeadingE}
								>
									Ton Ton Ramen & Yakitori
								</Typography>
								<Typography
									variant="h6"
									align="center"
									className={classes.subHeading2E}
									// style="{{ color: "tan"}}
								>
									server
								</Typography>
								<Typography
									variant="body1"
									align="center"
									style={{ color: "#234" }}
								>
									Atlanta, GA
								</Typography>

								<Typography
									variant="subtitle1"
									align="left"
									style={{ color: "grey" }}
								>
									<div>
										• Filled in as manager when needed -
										responsibilities included resolving
										customer issues, entering shift reports,
										and taking inventory
									</div>
									<div>
										• Developed valuable soft skills, which
										included communication, teamwork,
										multitasking, and working under pressure
									</div>
									<div>
										• Trained new hires and created training
										materials along with a checklist of
										server side-duties
									</div>
								</Typography>
							</Box>
							<Typography
								variant="h3"
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
									className={classes.subHeadingE}
								>
									Elev8 Hire Solutions{" "}
								</Typography>
								<Typography
									variant="h6"
									align="center"
									className={classes.subHeading2E}
								>
									IT Recruiter
								</Typography>
								<Typography
									variant="body1"
									align="center"
									style={{
										color: "#234",
										// backgroundColor: "white",
									}}
								>
									Atlanta, GA
								</Typography>

								<Typography
									variant="subtitle1"
									align="left"
									style={{
										color: "grey",
										// backgroundColor: "yellow",
									}}
								>
									<div>
										• Performed full sles recruiting
										lifecycle - from prospecting, job
										selling, screening, offer negotiation,
										and onboarding
									</div>
									<div>
										• Communicated with hiring managers to
										discover project requirements and ideal
										candidates
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
