import React from "react";

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
// import { FullscreenExit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		// backgroundColor: "black",
	},
	mainContainer: {
		// flexDirection: "column",
		width: "100vw",
		backgroundColor: "white",
		paddingTop: "42%",
		// backdropFilter: "blur(3px)",
		// padding: "1.2rem",
		// margin: "1rem",
		// width: "100%",
		// height: "100vh",
		// justifyContent: "center",
		// height: "50%",
		// alignContent: "center",
	},
	gridContainer: {
		// display: "flex",
		// direction: "column",
		// paddingTop: "8vh",
		// width: "100vw",
		// height: "100vh",
		backgroundColor: "rgba(0,0,0,.2)",
		// backgroundColor: "black",

		justify: "space-evenly",
		// padding: "20% 2% 10%",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			// padding: "14% 20% 0",
			// margin: "14% 24% 0",
			// paddingTop: "10%",
			width: "100vw",
			// height: "100vh",
			justify: "center",
			alignItems: "center",
			fontSize: "8em",
			paddingTop: "4.5vh",
			// padding: "0rem 3rem",
			// transform: "translateX(-23%)",
			// transform: "scale(0.8,0.8)",
			// padding: "2em",
			// spacing: "2",
		},
		[theme.breakpoints.up("sm")]: {
			// padding: "14% 20% 0",
			// margin: "14% 24% 0",
			// paddingTop: "10%",
			width: "100vw",
			height: "100vh",
			justify: "center",
			alignItems: "center",
			fontSize: "10em",
			// padding: "0rem 3rem",
			// transform: "translateX(-23%)",
			transform: "scale(0.8,0.8)",
			padding: "5vh",
			marginTop: "4vh",
			// padding: "2em",
			// spacing: "2",
		},
		[theme.breakpoints.up("md")]: {
			// padding: "14% 20% 0",
			// margin: "14% 24% 0",
			// paddingTop: "10%",
			width: "100vw",
			justify: "center",
			alignItems: "center",
			fontSize: "9em",
			// padding: "0rem 3rem",
			// transform: "translateX(-23%)",
			transform: "scale(0.8,0.8)",
			padding: "9vh 9vh 9vh",
			// marginTop: "14vh",
			// padding: "2em",
			// spacing: "2",
		},
		// height: "100%",
		// alignContent: "center",
	},
	gridItems: {
		padding: "1rem 4rem",
		[theme.breakpoints.down("sm")]: {
			padding: ".25rem .3rem",
		},
	},
	gridItems1: {
		// justifyContent: "center",
		// alignItems: "center",
		// padding: ".7rem",
	},
	paper: {
		color: "dimgrey",
		padding: ".5rem 3rem",
		[theme.breakpoints.down("sm")]: {
			padding: "1rem",
		},
		[theme.breakpoints.up("sm")]: {
			padding: "1 4rem",
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
		textAlign: "center",
		width: theme.spacing(15),
		height: theme.spacing(15),
		[theme.breakpoints.down("sm")]: {
			width: "30vw",
			height: "30vw",

			// width: theme.spacing(12),
			// height: theme.spacing(12),
		},
		[theme.breakpoints.up("sm")]: {
			width: "22vw",
			height: "22vw",
		},
		// textAlign: "center",
		// margin: theme.spacing(6),
		// textAlign: "center",
		// border: "black",
		// maxWidth: "50%",
		// margin: theme.spacing(2),
		// alignItems: "center",
		// justifyContent: "center",
		// backgroundColor: "purple",
		// margin: "auto",
	},
	mainPaper: {
		// height: "100vh",
		backgroundColor: "rgba(0,0,0,.2)",
		height: "100vh",
		// backgroundColor: "green",

		// backdropFilter: "blur(4px)",
		// backgroundColor: "rgba(f,f,f,.5)",
	},
	titleAndAvatarGridContainer: {
		// padding: "1rem 4rem",

		// backgroundColor: "aliceblue",
		// padding: "2vh",
		// [theme.breakpoints.down("xs")]: {},
		[theme.breakpoints.down("sm")]: {
			padding: ".25rem .3rem",
		},
		[theme.breakpoints.up("md")]: {
			padding: "1rem 4rem",
		},
	},
	typographyText: {
		padding: "0 1rem",
		[theme.breakpoints.up("sm")]: {
			fontSize: "1.4rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "1.6rem",
		},
		// [theme.breakpoints.up("lg")]: {
		// 	fontSize: "2em",
		// },
	},
	typographyTextAboutMe: {
		padding: "0 .2rem",
		textAlign: "center",
		fontSize: "1.1rem",
		[theme.breakpoints.down("xs")]: {
			fontSize: "6vw",
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "2.3rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "2.5rem",
		},
	},
	aboutMeGridContainer: {
		backgroundColor: "orange",
	},
	avatarGridContainer: {
		justifyContent: "center",

		[theme.breakpoints.down("xs")]: { justifyContent: "flex-end" },
		[theme.breakpoints.up("md")]: { padding: "1rem 4rem" },
	},
	aboutAvatarPaperGridItemContainer: {
		backgroundColor: "white",
		height: "100vh",
		[theme.breakpoints.down("sm")]: {
			backgroundColor: "rgba(0,0,0,.4)",
			paddingTop: "8vh",
		},
		[theme.breakpoints.up("sm")]: {
			backgroundColor: "white",
		},
		[theme.breakpoints.up("md")]: { padding: "1rem 4rem" },
	},
	firstGridItem: {
		padding: ".5rem",
		justify: "space-evenly",
		// alignItems: "stretch",
	},
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const About = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Paper square className={classes.mainPaper} elevation={0}>
				<Grid
					container
					className={classes.gridContainer}
					// spacing={2}
					// direction="column"
					justify="center"
					// alignItems="center"
					// style={{ backgroundColor: "rgba(0,0,0,.5)" }}
					// style={{ backgroundColor: "white" }}
					// justify="center"
				>
					<Paper
						style={{ padding: "5vh" }}
						className={classes.aboutAvatarPaperGridItemContainer}
					>
						{/* <Grid
							item
							container
							// direction="column"
							className={classes.gridItems1}
							justify="center"
							alignItems="center"
							spacing={2}
						> */}
						<Grid
							item
							container
							justify="space-evenly"
							className={classes.titleAndAvatarGridContainer}
							// style={{ backgroundColor: "aliceblue" }}
						>
							<Paper
								style={{
									width: "100%",
									backgroundColor: "aliceblue",
								}}
							>
								<Grid
									item
									container
									justify="space-evenly"
									alignItems="stretch"
									className={classes.firstGridItem}
								>
									<Grid
										item
										container
										xs={6}
										// md={6}
										justify="center"
										alignItems="center"
									>
										<Paper
											style={{
												backgroundColor: "lightgrey",
												padding: ".4rem",
											}}
										>
											<Grid
												item
												// direction="column"
												// justify="center"

												className={
													classes.aboutMeGridContainer
												}
											>
												{/* <Grid item> */}
												<Paper
													elevation={1}
													className={classes.paper}
													style={{
														// backgroundColor: "aliceblue",
														backgroundColor:
															"white",
														color: "darkslategray",
														textTransform:
															"lowercase",
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
									{/* </Grid> */}

									<Grid
										item
										container
										xs={6}
										alignItems="center"
										className={classes.avatarGridContainer}
									>
										{/* <Grid item> */}
										<Paper
											elevation={4}
											style={{
												backgroundColor: "lightgrey",
												// width: "100%",
												padding: ".3rem",
											}}
										>
											<Grid
												item
												// direction="column"
												// justify="center"
												xs={12}
												className={
													classes.aboutMeGridContainer
												}
											></Grid>
											<Avatar
												src={avatar}
												alt="Donaldpicture"
												className={classes.avatar}
												variant="rounded"
											/>
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
									passionate about writing clean, efficient
									code and solving real world problems -
									making the world a better place, one line of
									code at a time.
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
									I enjoy turning complex problems into
									simple, beautiful and intuitive designs. I
									love to build things and I'm obsessed with
									making things better. I have a thirst for
									knowlede and coding really quenches my
									desire to learn.
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
									cooking something fierce in the kitchen, out
									in the garden, or out walking my dogs.
								</Typography>
							</Paper>
						</Grid>
					</Paper>
				</Grid>
			</Paper>
		</ThemeProvider>
	);
};

export default About;
