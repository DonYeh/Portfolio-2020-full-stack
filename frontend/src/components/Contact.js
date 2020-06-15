import {
	Button,
	TextField,
	Box,
	Grid,
	Paper,
	Typography,
	CssBaseline,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";

import { Form, Formik, Field, FieldProps } from "formik";
import * as React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Navbar3 from "./Navbar3";
import { MyField } from "./MyField";
import {
	makeStyles,
	ThemeProvider,
	StylesProvider,
} from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import axios from "axios";
import * as Yup from "yup";
import Error from "./Error";
// import Modal from "@material-ui/core/Modal";
import Modal from "react-modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
Modal.setAppElement("#root"); //fixes the warning that react-modal: App element is not defined

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	// fullWidth: "true",
	// },
	gridContainer: {
		justify: "center",
		// marginTop: "7vh",
		padding: "8vh 1vw 8vh",

		// padding: "7vh 1.2vw 1.2vh",
		// [theme.breakpoints.up("sm")]: {
		// 	// marginTop: "14vh",
		// 	// margin: "14vh 5vw 14vh",
		// 	// margin: "12vh 10vw",
		// 	// padding: "2em",
		// 	// backgroundColor: "darkblue",
		// 	// },
		// 	// alignContent: "center",
		// 	// width: "100%",
		// 	// paddingTop: "7vh",
		// 	// marginTop: "12vh",
		// 	// background: "white",
		// 	// backgroundColor: "rgba(0,0,0,.8)",
		// },
		// margin: "0",

		[theme.breakpoints.up("sm")]: {
			// padding: "8vh 3vw 1.2vh",
			padding: "10vh 10vw .5vh",
		},
		[theme.breakpoints.up("md")]: {
			spacing: "3",
		},
	},
	gridItem: {
		// background: "white",
		// paddingTop: "7.5vh",
		// padding: "1rem 1rem",
		padding: "1.2rem",
		// marginTop: "4.5vh",
		// backgroundColor: "aliceblue",
		"&:nth-of-type(2n)": {
			padding: "0rem 1.2rem",
		},

		// 	padding: ".5rem 1.2rem 0rem",
		// 	alignItems: "center",
		// }}

		// style={{
		// 	backgroundColor: "aliceblue",
		// 	padding: "1.2rem 1.2rem 0rem",
		// }}
		[theme.breakpoints.up("sm")]: {
			padding: "2rem",
			"&:nth-of-type(2n)": {
				padding: "0rem 2rem",
			},
		},
		[theme.breakpoints.up("md")]: {
			padding: "2.5rem",
			"&:nth-of-type(2n)": {
				padding: "0rem 2.5rem",
			},
		},
	},

	paper: {
		backgroundColor: "rgba(213, 223, 226, 0.8)",
		width: "100%",
		padding: "1rem 1.5rem",
		// marginTop: ".5rem",
		[theme.breakpoints.up("sm")]: {
			padding: "2rem 4rem",
		},
		[theme.breakpoints.up("md")]: {
			padding: "1rem 4rem",
		},
	},
	paperDark: {
		backgroundColor: "rgba(37, 41, 41, 0.9)",
		width: "100%",

		padding: "1rem 1.5rem",
		// marginTop: ".5rem",
		[theme.breakpoints.up("sm")]: {
			padding: "2rem 4rem",
		},
		[theme.breakpoints.up("md")]: {
			padding: "1rem 4rem",
		},
	},
	mainPaper: {
		// height: "93vh",
		// backgroundColor: "rgba(0,0,0,.65)",
		// backgroundColor: "rgba(255,255,255,.3)",
		// padding: "2vh 2vw", // marginTop: "14vh",
		// height: "100vh",
		height: "100%",

		[theme.breakpoints.up("sm")]: {
			marginTop: "3vh",
			height: "97vh",
			// marginTop: "10vh",
			// margin: "14vh 5vw 14vh",
			// padding: "11vh 9vw",
			// padding: "2em",
			// backgroundColor: "darkblue",
		},
		[theme.breakpoints.up("md")]: {
			// marginTop: "10vh",
			// margin: "14vh 5vw 14vh",
			// padding: "12vh 10vw",
			// height: "100vh",
			// padding: "2em",
			// backgroundColor: "darkblue",
		},
	},
	hasError: {
		border: "1px solid #f44336",
		background: "#f44336",
	},
	noError: {
		width: "100%",
	},

	formMessage: {
		fontSize: "10px",
		paddingTop: "2px",
	},
	valid: {
		color: "#4caf50",
		background: "#4caf50",
	},
	invalid: {
		color: "#f44336",
		background: "#f44336",
	},
	paperContact: {
		// padding: "10% 20% 10%"
		padding: ".5rem 1.2rem 2.2rem",
		// backgroundColor: "lightgrey",
	},
	textField: {
		width: "100%",
		backgroundColor: "orange",
	},
	labelTextField: {
		fontSize: "1rem",
		[theme.breakpoints.up("sm")]: {
			fontSize: "1.3rem",
		},

		[theme.breakpoints.up("md")]: {
			fontSize: "1.5rem",
		},
	},
	firstGridItemTitle: {
		// color: "rgba(90, 90, 90, 0.88)",
		color: "rgba(84, 84, 84, 0.9)",
		fontSize: "1.4rem",
		[theme.breakpoints.up("sm")]: {
			fontSize: "2.2rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "2.8rem",
		},
	},
	firstGridItemTitleDark: {
		color: "#a9a9a9",
		fontSize: "1.4rem",
		[theme.breakpoints.up("sm")]: {
			fontSize: "2.2rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "2.8rem",
		},
	},
	firstGridItemP: {
		fontSize: "1rem",
		[theme.breakpoints.up("sm")]: {
			fontSize: "1.3rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "1.5rem",
		},
	},
	topDrawer: {
		height: "53px",
	},

	thirdGridItemTitle: {
		fontSize: " 1rem",
		// paddingBottom: "6vh",
		[theme.breakpoints.up("sm")]: {
			fontSize: "1.3rem",
		},

		[theme.breakpoints.up("md")]: {
			fontSize: "1.5rem",
		},
	},
}));

const handleSubmit = async (values, actions) => {
	console.log(actions);
	let res = await axios.post("api/sendMail", values).then(
		(response) => {
			console.log(response);
		},
		(error) => {
			console.log(error);
		}
	);

	console.log(
		`inside handleSubmit: values:${values.json()},actions:${actions.json()}`
	);
	// alert(JSON.stringify(values, null, 2));
	actions.setSubmitting(false);
};

const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.max(255, "Must be shorter than 255 characters")
		.required("must enter a first name"),

	lastName: Yup.string()
		.max(255, "Must be shorter than 255 characters")
		.required("must enter a last name"),

	email: Yup.string()
		.email("Must be a valid email address")
		.max(255, "Must be shorter than 255 characters")
		.required("must enter an email so that I can email you back"),

	message: Yup.string()
		.max(255, "Must be shorter than 255 characters")
		.required(
			"must enter a message. I'm not a mind reader...at least, not yet"
		),
});

// const formTheme = createMuiTheme({
// 	overrides: {
// 		MuiFormControl: {
// 			// fullWidth: "true",
// 			minWidth: "88%",
// 		},
// 	},
// });

let theme = createMuiTheme();
// theme = responsiveFontSizes(darkTheme);
theme = responsiveFontSizes(theme);

const Contact = ({ darkMode }) => {
	const classes = useStyles();
	const [modalIsOpen, setModalIsOpen] = useState(false);

	// const [contactDarkMode, setContactDarkMode] = useState(darkMode);

	// useEffect((darkMode) => setContactDarkMode(darkMode), [darkMode]);

	const mainPrimaryColor = darkMode ? orange[800] : lightBlue[500];
	// const mainSecondaryColor = darkMode ? deepOrange[900] : deepPurple[500];
	const mainSecondaryColor = darkMode ? orange[700] : teal[800];

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

	const handleOpen = () => {
		setModalIsOpen(true);
	};

	const handleClose = () => {
		setModalIsOpen(false);
	};

	const handleModal = () => {
		setTimeout(() => {
			console.log("yo!");
			setModalIsOpen(true);
		}, 500);
	};

	return (
		<>
			{/* <Navbar3 /> */}
			{/* <ThemeProvider theme={formTheme}> */}
			{/* <ThemeProvider theme={contactDarkMode ? darkTheme : theme}> */}
			{/* <ThemeProvider theme={darkTheme}> */}
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<StylesProvider injectFirst>
					<Paper square className={classes.mainPaper}>
						<Grid
							container
							justify="center"
							alignItems="center"
							// spacing={2}
							className={classes.gridContainer}
						>
							<Grid
								item
								xs={12}
								// md={6}
								className={classes.gridItem}

								// style={{ backgroundColor: "pink" }}
							>
								<Paper
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
									// style={{
									// 	backgroundColor: darkMode
									// 		? "rgba(0, 0, 0, 0.5)"
									// 		: "rgba(255, 255, 255, 0.5)",
									// }}
								>
									<Typography
										variant="h6"
										align="center"
										style={{
											// color: "darkslategrey",
											paddingBottom: ".5rem",

											// color: darkMode
											// 	? "rgba(255, 255, 255, 0.6)"
											// 	: "rgba(0, 0, 0, 0.7)",

											color: darkMode
												? "rgba(191, 191, 191, 0.62)"
												: "rgba(100, 100, 100, 0.9)",
										}}
										className={
											darkMode
												? classes.firstGridItemTitleDark
												: classes.firstGridItemTitle
										}
									>
										Let's build together
									</Typography>
									<Typography
										variant="body1"
										color="textSecondary"
										className={classes.firstGridItemP}
									>
										Have a project you're looking to get off
										the ground? I'd love to hear from you.
										Send a message and let's get the ball
										rolling!
									</Typography>
								</Paper>
							</Grid>
							<Grid
								item
								container
								xs={12}
								// md={6}
								// md={6}
								// lg={6}
								justify="center"
								// alignItems="center"
								className={classes.gridItem}
							>
								<Grid item xs={12}>
									<Paper
										className={
											darkMode
												? classes.paperDark
												: classes.paper
										}
									>
										<Formik
											initialValues={{
												firstName: "",
												lastName: "",
												email: "",
												message: "",
											}}
											onSubmit={handleSubmit}
											validationSchema={validationSchema}
											fullWidth
										>
											{({
												values,
												errors,
												touched,
												handleChange,
												handleBlur,
											}) => (
												<Form
													style={
														{
															// backgroundColor: "red",
														}
													}
												>
													{/* <div> */}
													<Field
														name="firstName"
														// component={MyField}
														label="first name"
														style={{
															width: "96%",
															fontSize: "1.4rem",
														}}
														as={TextField}
														fullWidth
													>
														<TextField
															name="firstName"
															value={
																values.firstName
															}
															onChange={
																handleChange
															}
															onBlur={handleBlur}
															fullWidth
															// className={
															// 	classes.labelTextField
															// }
															InputProps={{
																classes: {
																	input:
																		classes.labelTextField,
																},
															}}
															variant="filled"
														/>
													</Field>
													<Error
														touched={
															touched.firstName
														}
														message={
															errors.firstName
														}
														className={
															classes.invalid
														}
													/>
													{/* </div> */}

													{/* <div> */}
													<Field
														name="lastName"
														// component={MyField}
														label="last name"
														style={{
															width: "96%",
															// minWidth: "81%",
														}}
														as={TextField}
													>
														<TextField
															name="lastName"
															fullWidth
															value={
																values.lastName
															}
															onChange={
																handleChange
															}
															onBlur={handleBlur}
															className={
																touched.lastName &&
																errors.lastName
																	? "classes.hasError"
																	: null
															}
															variant="filled"
															style={{
																width: "100%",
															}}
														/>
													</Field>
													<Error
														touched={
															touched.lastName
														}
														message={
															errors.lastName
														}
														className={
															touched.lastName &&
															errors.lastName
																? "classes.hasError"
																: null
														}
													/>
													{/* </div> */}

													<div
													// style={{
													// 	width: "96%",
													// }}
													>
														<Field
															name="email"
															// component={MyField}
															label="email"
															style={{
																width: "96%",
															}}
															as={TextField}
														>
															<TextField
																name="email"
																fullWidth
																value={
																	values.email
																}
																onChange={
																	handleChange
																}
																onBlur={
																	handleBlur
																}
																className={
																	touched.email &&
																	errors.email
																		? "classes.hasError"
																		: "classes.noError"
																}
																variant="outlined"
																style={{
																	width:
																		"100%",
																}}
															/>
														</Field>
														<Error
															touched={
																touched.email
															}
															message={
																errors.email
															}
														/>
													</div>
													<div>
														<Field
															name="message"
															// component={MyField}
															label="message"
															style={{
																width: "96%",
															}}
															as={TextField}
															autocomplete="false"
														>
															<TextField
																name="message here"
																multiline
																rows="3"
																fullWidth
																value={
																	values.message
																}
																onChange={
																	handleChange
																}
																onBlur={
																	handleBlur
																}
																variant="outlined"
																className={
																	touched.message &&
																	errors.message
																		? "classes.hasError"
																		: null
																}
																helperText={
																	errors.message
																}
																style={{
																	width:
																		"100%",
																}}
															/>
														</Field>
														<Error
															touched={
																touched.message
															}
															message={
																errors.message
															}
														/>
													</div>
													<Grid
														container
														justify="center"
													>
														<Grid item>
															<Button
																type="submit"
																// variant="outlined"
																onClick={
																	handleModal
																}
																style={{
																	backgroundColor: darkMode
																		? "rgba(26, 29, 29, 0.9)"
																		: "rgba(179, 188, 191, 0.9)",
																}}
															>
																<Typography
																	variant=""
																	style={{
																		color: darkMode
																			? // ? "#a9a9a9"
																			  "rgba(251, 182, 83, 0.65)"
																			: "rgba(60, 60, 60, 0.9)",
																	}}
																>
																	submit
																</Typography>
															</Button>
														</Grid>
													</Grid>

													<Modal
														isOpen={modalIsOpen}
														onRequestClose={() =>
															setModalIsOpen(
																false
															)
														}
														style={{
															color: darkMode
																? "rgba(255, 255, 255, 0.6)"
																: "rgba(0, 0, 0, 0.7)",
															backgroundColor: darkMode
																? "rgba(0,0,0,.5)"
																: "#e5e5e5",
														}}
														// BackdropProps={{
														// 	backgroundColor:
														// 		"purple",
														// }}
														BackdropProps={{
															invisible: true,
														}}
														PaperProps={{
															backgroundColor:
																"brown",
														}}
														disablePortal
													>
														<Typography
															variant="h5"
															align="center"
															style={{
																padding:
																	"10vh 0 5vh",
																color: darkMode
																	? "#a9a9a9"
																	: "#1f512dd9",
																// backgroundColor:
																// 	"black",
															}}
														>
															Thanks for reaching
															out!
														</Typography>

														<Typography
															variant="body1"
															align="center"
														>
															You should be
															receiving a
															confirmation email
															soon and can expect
															to hear back from me
															in the next few
															days.
														</Typography>
														<Grid
															container
															justify="center"
															style={{
																paddingTop:
																	"4vh",
															}}
														>
															<Grid item>
																<Button
																	variant="outlined"
																	onClick={() =>
																		setModalIsOpen(
																			false
																		)
																	}
																	style={{
																		backgroundColor: darkMode
																			? "rgba(180, 79, 9, 0.4)"
																			: "rgba(255, 183, 77, 0.5)",
																	}}
																>
																	<Typography
																		style={{
																			color: darkMode
																				? "#a9a9a9"
																				: "#1f512dd9",
																		}}
																	>
																		Close
																	</Typography>
																</Button>
															</Grid>
														</Grid>
													</Modal>

													{/* <pre>
												{JSON.stringify(
													values,
													null,
													2
												)}
											</pre> */}
												</Form>
											)}
										</Formik>
									</Paper>
								</Grid>
							</Grid>
							<Grid
								item
								xs={12}
								// md={6}
								container
								// spacing={3}
								className={classes.gridItem}
								justify="center"
								// style={{
								// 	backgroundColor: "aliceblue",
								// 	padding: "2.5rem 3rem 2.5rem",
								// }}
							>
								<Paper
									// style={{
									// 	width: "100%",
									// 	padding: ".75rem .2rem 1rem",
									// }}
									className={
										darkMode
											? classes.paperDark
											: classes.paper
									}
								>
									<Grid
										item
										style={{ paddingBottom: ".5rem" }}
									>
										<Typography
											variant="h5"
											align="center"
											// style={{ color: "darkslategrey" }}
											className={
												classes.thirdGridItemTitle
											}
											style={{
												// color: darkMode
												// 	? "rgba(255, 255, 255, 0.6)"
												// 	: "rgba(0, 0, 0, 0.7)",
												color: darkMode
													? "rgba(154, 154, 154, 0.9)"
													: "rgba(75, 69, 60, 0.75)",
											}}
										>
											Let's Connect
										</Typography>
									</Grid>

									<Grid
										container
										justify="space-evenly"
										style={{ paddingTop: ".2rem" }}
									>
										<Grid item>
											<Link
												href="https://www.linkedin.com/in/donald-yeh-b3b1426/"
												// onClick={preventDefault}
												variant="body2"
											>
												{/* {'variant="body2"'} */}
												<LinkedInIcon
													style={{
														color: darkMode
															? "rgba(67,118,178,.5)"
															: "rgba(67,118,178)",
													}}
												/>
											</Link>
										</Grid>

										<Grid item>
											<Link
												href="https://github.com/DonYeh"
												// onClick={preventDefault}
												variant="body2"
											>
												{/* {'variant="body2"'} */}
												<GitHubIcon
													style={{
														color: darkMode
															? "rgba(109, 109, 109, 0.7)"
															: "rgba(42,45,49)",
													}}
												/>
											</Link>
										</Grid>

										<Grid item>
											<Link
												href="https://twitter.com/heydonaldyeh"
												// onClick={preventDefault}
												variant="body2"
											>
												{/* {'variant="body2"'} */}
												<TwitterIcon
													style={{
														color: darkMode
															? "rgba(94, 160,239,.5"
															: "rgb(94, 160,239)",
													}}
												/>
											</Link>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
						</Grid>
					</Paper>

					{/* </ThemeProvider> */}
				</StylesProvider>
			</ThemeProvider>
		</>
	);
};

export default Contact;
