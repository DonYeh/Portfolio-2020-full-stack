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
		backgroundColor: "black",
	},
	mainContainer: {
		// flexDirection: "column",
		width: "100vw",
		backgroundColor: "white",
		paddingTop: "42%",
		backdropFilter: "blur(3px)",
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
		backgroundColor: "rgba(0,0,0,9)",

		justify: "space-evenly",
		// padding: "20% 2% 10%",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			// padding: "14% 20% 0",
			// margin: "14% 24% 0",
			// paddingTop: "10%",
			width: "100vw",
			height: "100vh",
			justify: "center",
			alignItems: "center",
			fontSize: "8em",
			paddingTop: "6vh",
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
			justify: "center",
			alignItems: "center",
			fontSize: "10em",
			// padding: "0rem 3rem",
			// transform: "translateX(-23%)",
			transform: "scale(0.8,0.8)",
			padding: "0 9vw",
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
			fontSize: "11em",
			// padding: "0rem 3rem",
			// transform: "translateX(-23%)",
			transform: "scale(0.8,0.8)",
			padding: "14vh 9vw 14vh",
			marginTop: "6vh",
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
		padding: "1rem",
	},
	paper: {
		color: "dimgrey",
		padding: "1rem 4rem",
		[theme.breakpoints.down("sm")]: {
			padding: "1rem",
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
		width: theme.spacing(12),
		height: theme.spacing(12),
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
		padding: "1rem",
	},
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const About = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid
				container
				className={classes.gridContainer}
				// spacing={2}
				// direction="column"
				justify="center"
				style={{ backgroundColor: "aliceblue" }}
				// justify="center"
			>
				<Paper className={classes.mainPaper}>
					<Grid
						item
						container
						className={classes.gridItems1}
						justify="space-evenly"
						// alignItems="center"
						spacing={2}
					>
						<Grid
							item
							alignContent="center"
							className={classes.gridItems}
						>
							<Paper
								elevation={0}
								className={classes.paper}
								style={{
									// backgroundColor: "aliceblue",
									backgroundColor: "white",
									color: "darkslategray",
									textTransform: "lowercase",
									fontWeight: "bold",
								}}
							>
								<Typography variant="h2" align="center">
									About Me
								</Typography>
							</Paper>
						</Grid>
						<Grid item>
							<Paper elevation={4}>
								<Avatar
									src={avatar}
									alt="Donaldpicture"
									className={classes.avatar}
									variant="rounded"
								/>
							</Paper>
						</Grid>
					</Grid>

					<Grid item className={classes.gridItems}>
						<Paper elevation={3} className={classes.paper}>
							<Typography variant="body1">
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
							<Typography>
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
						style={{ paddingBottom: ".5em" }}
					>
						<Paper
							elevation={3}
							className={classes.paper}
							style={{ color: "dimgrey" }}
						>
							<Typography>
								When Im not at the computer, you can find me
								cooking something fierce in the kitchen, out in
								the garden, or out walking my dogs.
							</Typography>
						</Paper>
					</Grid>
				</Paper>
			</Grid>
		</ThemeProvider>
	);
};

export default About;
