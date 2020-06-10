import React from "react";
import {
	Typography,
	Grid,
	CssBaseline,
	ThemeProvider,
} from "@material-ui/core/";
// import avatar from "../images/Boone.png";
import Typed from "react-typed";
import {
	makeStyles,
	createMuiTheme,
	responsiveFontSizes,
} from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

// import { ViewColumn } from "@material-ui/icons";
// import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
	mainGridContainer: {
		paddingTop: "22vh",
		// padding: "33% 0% 0%",
	},

	typedContainer: {
		// margin: theme.spacing(8),
		// paddingTop: "5rem",
		padding: "0 9vw",

		textAlign: "center",
		margin: "0",

		[theme.breakpoints.up("lg")]: {
			fontSize: "9em",
		},
	},
	typedItem: {},
	typedFont: {
		// color: "white",
		color: "rgba(255,255,255, .81)", // dark mode
		color: "rgba(68,68,68, .86)", // dark mode

		textShadow: "1px 1px rgb(20,33,61)", //dark blue
		// no textShadow when in light mode
		// textShadow: "1.5px 1.5px rgb(240,169,80)",

		// marginTop: "10%",
		// textAlign: "flex-start",
		// backgroundColor: "blue",
	},
	mainPaper: {
		height: "95vh",
		// backgroundColor: "rgba(0,0,0,.2)", //dark
		backgroundColor: "rgba(255,255,255,.55)", //dark

		// backdropFilter: "blur(4px)",
		// backgroundColor: "rgba(f,f,f,.5)",
	},
}));

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
	},
});

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const HomePage = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Paper square className={classes.mainPaper}>
				<Grid
					container
					justify="center"
					className={classes.mainGridContainer}
					// alignItems="center"
					// spacing={2}
				>
					<Grid item xs={2} />
					<Grid
						item
						sm={8}
						container
						justify="center"
						alignItems="center"
						spacing={1}
						className={classes.typedContainer}
					>
						<Grid item xs={12} className={classes.typedItem}>
							<Typography
								variant="h3"
								className={classes.typedFont}
							>
								<Typed
									strings={[
										"Hello^2",
										"Hi!^4 👋",
										"I'm Donald^2",
									]}
									typeSpeed={26}
									startDelay={2000}
									showCursor={false}
								/>
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							// sm={12}
							// lg={8}
							className={classes.typedItem}
						>
							<Typography
								variant="h3"
								className={classes.typedFont}
							>
								<Typed
									strings={[
										"I'm a full stack developer ^11800",
										"I'm a software engineer ^700",
										"I'm a coder ^700",
										"I'm a techie ^700",
										"I'm a builder ^700",
										"I'm a problem solver^700",
									]}
									typeSpeed={15}
									startDelay={6500}
									backSpeed={22}
									smartBackspace="true"
									random
									loop
									showCursor={false}
								/>
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							// sm={12}
							// lg={8}
							className={classes.typedItem}
						>
							<Typography
								variant="h3"
								className={classes.typedFont}
							>
								<Typed
									strings={["from^3"]}
									typeSpeed={18}
									startDelay={7300}
									showCursor={false}
								/>
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							// sm={12}
							// lg={8}
							className={classes.typedItem}
						>
							<Typography
								variant="h3"
								className={classes.typedFont}
							>
								<Typed
									strings={[
										// "Atlanta^1800",
										"ATL^900",
										"A-Town^900",
										"the A^900",
										"Hotlanta^400...(please don't ever call it Hotlanta)^650",
										"Atlanta^1800",
									]}
									typeSpeed={11}
									startDelay={7750}
									backSpeed={15}
									backDelay={250}
									smartBackspace="true"
									// cursorChar="        "
									showCursor={true}
									fadeOut="true"
									loop
									random
									// smartBackspace="true"
								/>
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							// sm={12}
							// lg={8}
							className={classes.typedItem}
						>
							<Typography
								variant="h3"
								className={classes.typedFont}
							>
								<Typed
									strings={["Georgia^60 🍑"]}
									typeSpeed={11}
									startDelay={16200}
									backSpeed={55}
									showCursor={false}
								/>
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={2} />
				</Grid>
			</Paper>
		</ThemeProvider>
	);
};

export default HomePage;
