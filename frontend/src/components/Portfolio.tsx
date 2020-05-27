import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import Navbar from "./Navbar";
import { Typography, Box, Paper, Grid, Avatar, Card } from "@material-ui/core";
import { FullscreenExit } from "@material-ui/icons";

const useStyles = makeStyles({
	root: {
		maxWidth: 350,
		// background: "white",
	},
	mainGridContainer: {
		display: "flex",
		// background: "black",
		alignItems: "center",
	},
	proj1: {},
});

export default function ImgMediaCard() {
	const classes = useStyles();

	return (
		<>
			<Navbar />
			<Grid
				className="mainGridContainer"
				container
				spacing={3}
				justify="center"
				alignContent="center"
			>
				<Grid item>
					<Box className="proj1">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="140"
									image="/static/images/cards/contemplative-reptile.jpg"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
									>
										donaldyeh.dev
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										This portfolio site is written in React,
										Typescript,and styled with Material-UI
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Box>
				</Grid>

				<Grid item>
					<Box className="proj2">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="140"
									image="/static/images/cards/contemplative-reptile.jpg"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
									>
										Chatris
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Chatris is a cross-platform, full-stack
										mobile app that allows you to enjoy a
										timeless classic while connecting with
										your friends over video and voice chat.
										Chatris is built using React Native,
										PostgreSQL, Node, Express, and Socket.io
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Box>
				</Grid>
				<Grid item>
					<Box className="proj3">
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="140"
									image="/static/images/cards/contemplative-reptile.jpg"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
									>
										Movie Explorer
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Movie Explorer allows you to browse and
										discover movies. It uses a responsive,
										mobile-first design featuring advanced
										filtering and search functionality. It
										is built with Javascript, HTML, CSS and
										it calls the OMDB and TMDB APIs for
										up-to-date movie information and
										trailers.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}

// const useStyles = makeStyles((theme) => ({
// 	mainContaitner: {
// 		backgroundColor: "white",
// 		width: "100vw",
// 		height: "100vh",
// 	},
// }));

// const Portfolio = () => {
// 	const classes = useStyles();

// 	return (
// 		<>
// 			<Navbar />
// 			<Box className={classes.mainContaitner}>
// 				<div>Portfolio here - tsx</div>
// 				<Card>Card goes here</Card>
// 			</Box>
// 		</>
// 	);
// };

// export default Portfolio;
