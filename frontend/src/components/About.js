import React, { useState, useEffect } from "react";

import {
	makeStyles,
	responsiveFontSizes,
	createMuiTheme,
} from "@material-ui/core/styles";
import {
	Typography,
	Paper,
	Grid,
	Avatar,
	ThemeProvider,
	CssBaseline,
} from "@material-ui/core";
import avatar from "../assets/IMG_1953.jpg";

import {
	orange,
	lightBlue,
	deepPurple,
	deepOrange,
} from "@material-ui/core/colors";

// import { FullscreenExit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		// backgroundColor: "black",
	},
	mainContainer: {
		// flexDirection: "column",
		width: "100vw",
		// backgroundColor: "white",
		color: "rgba(255,255,255, .81)",
		padding: "42% 1% 1%",
		// paddingTop: "42%",
	},

	mainPaper: {
		// height: "100vh",
		// height: "calc(100%)",
		// width: "100vw",
		// height: "calc(100% + 56px)",
		// padding: "1.5vh 0 1vh",
		// margin: "1.2rem",
		// padding: "1em 0 1em",
		// backgroundColor: " rgba(255,255,255,.2)",

		// backgroundColor: "rgba(0,0,0,.4)
		// height: "100vh",
		// padding: ".5em",
		// backgroundColor: "green",

		// backdropFilter: "blur(4px)",

		// transform: "translateY(9vh)",
		[theme.breakpoints.up("sm")]: {
			marginTop: "15vh",
			padding: "0",
		},
		[theme.breakpoints.up("md")]: {
			marginTop: "13vh",
			padding: "0",
		},
	},

	gridContainer: {
		alignItems: "center",
		// paddingTop: "8vh",
		padding: "8vh 5vw",
		// paddingTop: "8vh",
		// padding: "4vh 4vw 1vh",
		// height: "100vh",
		// height: "100vh",
		width: "100vw",
		margin: "0",

		[theme.breakpoints.up("sm")]: {
			// width: "100vw",
			// height: "100vh",
			width: "100%",
			padding: "4.5vw",
			// padding: "2.5vh 4vw 2.5vh",
			justify: "center",
			alignItems: "center",
			fontSize: "10em",
			// padding: "",
			// transform: "scale(0.9,0.9)",
			// padding: "5vh",
			// marginTop: "4vh",
		},
		[theme.breakpoints.up("md")]: {
			// width: "100vw",

			// fontSize: "9em",
			// transform: "scale(0.9,0.9)",
			// padding: "9vh 9vh 9vh",
			padding: "8vw",
		},
	},
	gridItems: {
		padding: ".3rem .3rem .2rem",
	},
	gridItems1: {},
	paper: {
		color: "dimgrey",
		padding: ".8rem .5rem",
		// [theme.breakpoints.down("sm")]: {
		// 	padding: "1rem",
		// },
		[theme.breakpoints.up("sm")]: {
			padding: "1 3rem",
		},

		// justifyContent: "space-evenly",
	},
	avatarContainer: {
		// width: "100%",
		// margin: "auto",
		// width: theme.spacing(12),
		// height: "15vw",
		// margin:
		// backgroundColor: "white",
		// margin: "30px 0px 0px 0px",
		// backgroundColor: "red",
		// textAlign: "center",
		// maxWidth: "100%",
	},
	avatar: {
		// textAlign: "center",
		width: theme.spacing(10),
		height: theme.spacing(10),
		// [theme.breakpoints.down("sm")]: {
		// 	width: "30vw",
		// 	height: "30vw",

		// 	// width: theme.spacing(12),
		// 	// height: theme.spacing(12),
		// },
		[theme.breakpoints.up("sm")]: {
			width: "15vw",
			height: "15vw",
		},
	},

	titleAndAvatarGridContainer: {
		// padding: "1rem 1rem .1rem",
		// padding: "1rem 4rem",

		// backgroundColor: "aliceblue",
		// padding: "2vh",
		// [theme.breakpoints.down("xs")]: {},
		// paddingBottom: "3vh ",
		// [theme.breakpoints.down("sm")]: {
		// 	padding: ".25rem .3rem",
		// },
		[theme.breakpoints.up("md")]: {
			// padding: "1rem 4rem",
		},
	},
	typographyText: {
		padding: "0 1.5rem",
		[theme.breakpoints.up("sm")]: {
			fontSize: "1.3rem",
		},
		[theme.breakpoints.up("md")]: {
			padding: "1rem 2.4rem",
			fontSize: "1.6rem",
		},
		// [theme.breakpoints.up("lg")]: {
		// 	fontSize: "2em",
		// },
	},
	typographyTextAboutMe: {
		padding: "0 .2rem",
		textAlign: "center",
		// fontSize: "1.1rem",
		// [theme.breakpoints.down("xs")]: {
		// 	fontSize: "6vw",
		// },
		[theme.breakpoints.up("sm")]: {
			fontSize: "3rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "4rem",
		},
	},
	aboutMeGridContainer: {
		// backgroundColor: "orangessswqaswq",
	},
	avatarGridContainer: {
		[theme.breakpoints.up("sm")]: {
			justifyContent: "flex-end",
			// transform: "translateX(30px)",
		},
	},
	aboutAvatarPaperGridItemContainer: {
		// backgroundColor: "white",

		// height: "100vh",
		// backgroundColor: "rgba(0,0,0,.4)",
		// paddingTop: "9vh",
		padding: "9vh 0 1vh",

		[theme.breakpoints.up("sm")]: {
			// backgroundColor: "white",
		},
		[theme.breakpoints.up("md")]: { padding: "1rem 4rem" },
	},
	firstGridItem: {
		// padding: ".5rem 0 .6rem .75rem",
		// backgroundColor: "aliceblue",
		// justify: "space-evenly",
		// alignItems: "stretch",
	},
	firstInnerGridItem: {},
	innerPaper: {
		padding: ".4em",
		[theme.breakpoints.up("sm")]: {
			padding: "5rem",
		},
		[theme.breakpoints.up("md")]: {},
	},
}));

// let theme = responsiveFontSizes(darkTheme);
// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);
// theme = responsiveFontSizes(darkTheme);

const About = ({ darkMode }) => {
	const [aboutDarkMode, setAboutDarkMode] = useState(darkMode);

	const mainPrimaryColor = darkMode ? orange[500] : lightBlue[500];
	const mainSecondaryColor = darkMode ? deepOrange[900] : deepPurple[500];

	// useEffect((themeMode) => setAboutThemeMode(themeMode), [abouteMode]);

	let darkTheme = createMuiTheme({
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
	});

	let theme = createMuiTheme({});
	// let theme = createMuiTheme({
	// 	palette: {
	// 		type: themeMode === "light" ? "light" : "dark",
	// 	},
	// });

	const classes = useStyles();

	return (
		// <ThemeProvider theme={darkTheme}>
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Paper square className={classes.mainPaper} elevation={0}>
				<Grid
					container
					className={classes.gridContainer}
					spacing={2}
					// direction="column"
					justify="space-evenly"
					// alignItems="center"
					// style={{ backgroundColor: "rgba(0,0,0,.5)" }}
					// style={{ backgroundColor: "white" }}
					// justify="center"
				>
					<Grid
						item
						container
						justify="center"
						className={`${classes.titleAndAvatarGridContainer} ${classes.gridItems}`}
						// spacing={2}
						style={{ margin: "0" }}
					>
						<Paper
							style={{
								// width: "100%",
								// backgroundColor: "aliceblue",
								padding: "1rem",
								width: "100%",
							}}
							elevation={1}
						>
							<Grid
								item
								container
								justify="space-evenly"
								// alignItems="stretch"
								className={classes.firstGridItem}
								style={{
									// justifyContent: "center",
									width: "100%",
								}}
							>
								<Grid
									item
									container
									xs={6}
									// md={6}
									justify="center"
									alignItems="center"
									className={classes.firstInnerGridItem} // style={{ backgroundColor: "blue" }}
								>
									<Paper
										style={{
											// backgroundColor: "lightgrey", //aliceblue
											// backgroundColor: "lightgrey", //aliceblue
											padding: ".4rem",
										}}
										className={classes.innerPaper}
									>
										<Grid
											item
											// direction="column"
											// justify="center"

											className={
												classes.aboutMeGridContainer
											}
											style={
												{
													// backgroundColor: "purple",
												}
											}
										>
											{/* <Grid item> */}
											<Paper
												elevation={1}
												className={classes.paper}
												style={{
													// backgroundColor: "aliceblue",
													// backgroundColor: "aliceblue",
													color: "darkslategray",
													textTransform: "lowercase",
													fontWeight: "bold",
													width: "100%",
												}}
											>
												<Typography
													variant="h4"
													className={
														classes.typographyTextAboutMe
													}
												>
													About Me
												</Typography>
											</Paper>
											{/* </Grid> */}
										</Grid>
									</Paper>
								</Grid>
								<Grid
									item
									container
									xs={6}
									justify="flex-end"
									alignItems="center"
									className={classes.avatarGridContainer}
								>
									{/* <Grid item> */}
									<Paper
										elevation={4}
										style={{
											// backgroundColor: "lightgrey",
											// width: "100%",
											padding: ".4rem",
										}}
									>
										<Grid
											item
											// direction="column"
											justify="flex-end"
											xs={12}
											className={
												classes.aboutMeGridContainer
											}
										>
											<Avatar
												src={avatar}
												alt="Donaldpicture"
												className={classes.avatar}
												variant="rounded"
											/>
										</Grid>
									</Paper>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					{/* </Grid> */}
					<Grid item className={classes.gridItems}>
						<Paper elevation={3} className={classes.paper}>
							<Typography
								variant="body1"
								className={classes.typographyText}
							>
								Hello. I’m a full-stack developer who is
								passionate about writing clean, efficient code
								and solving real world problems - making the
								world a better place, one line of code at a
								time.
							</Typography>
						</Paper>
					</Grid>
					<Grid item className={classes.gridItems}>
						<Paper
							elevation={3}
							className={classes.paper}
							style={{ color: "dimgrey" }}
						>
							<Typography
								variant="body1"
								className={classes.typographyText}
							>
								I enjoy turning complex problems into simple,
								beautiful and intuitive designs. I love to build
								things and I'm obsessed with making things
								better. I have a thirst for knowlede and coding
								really quenches my desire to learn.
							</Typography>
						</Paper>
					</Grid>
					<Grid
						item
						className={classes.gridItems}
						// style={{ paddingBottom: ".5em" }}
					>
						<Paper
							elevation={3}
							className={classes.paper}
							style={{ color: "dimgrey" }}
						>
							<Typography
								variant="body1"
								className={classes.typographyText}
								// style={{ paddingBottom: "0rem" }}
							>
								When Im not at the computer, you can find me
								cooking something fierce in the kitchen, out in
								the garden, or out walking my dogs.
							</Typography>
						</Paper>
					</Grid>
					{/* </Paper> */}
				</Grid>
			</Paper>
		</ThemeProvider>
	);
};

export default About;
