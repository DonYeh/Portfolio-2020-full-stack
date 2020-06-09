import {
	Button,
	TextField,
	Box,
	Grid,
	Paper,
	Typography,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";

import { Form, Formik, Field, FieldProps } from "formik";
import * as React from "react";
import { useState } from "react";
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

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
Modal.setAppElement("#root"); //fixes the warning that react-modal: App element is not defined

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	// fullWidth: "true",
	// },
	gridContainer: {
		justify: "center",
		padding: "7vh 1.2vw 1.2vh",
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
			padding: "8vh 3vw 1.2vh",
		},
		[theme.breakpoints.up("md")]: {
			spacing: "3",
		},
	},
	gridItem: {
		// background: "white",
		padding: ".8rem ",
		"&:nth-of-type(2n)": {
			padding: "0rem .8rem 0rem",
		},

		// style={{
		backgroundColor: "aliceblue",
		// 	padding: ".5rem 1.2rem 0rem",
		// 	alignItems: "center",
		// }}

		// style={{
		// 	backgroundColor: "aliceblue",
		// 	padding: "1.2rem 1.2rem 0rem",
		// }}
		[theme.breakpoints.up("sm")]: {
			padding: "1.5rem",
			"&:nth-of-type(2n)": {
				padding: "0rem 1.5rem 0rem",
			},
		},
		[theme.breakpoints.up("md")]: {
			padding: "2.5rem",
			"&:nth-of-type(2n)": {
				padding: "0rem 2.5rem 0rem",
			},
		},
	},

	paper: {
		// background: "white",
		padding: "1rem 2rem",
		// marginTop: ".5rem",
		[theme.breakpoints.up("sm")]: {
			padding: "2rem 4rem",
		},
	},
	mainPaper: {
		backgroundColor: "rgba(0,0,0,.3)",
		padding: "3vh 2.5vw", // marginTop: "14vh",
		height: "100vh",

		[theme.breakpoints.up("sm")]: {
			// marginTop: "10vh",
			// margin: "14vh 5vw 14vh",
			padding: "11vh 9vw",
			// padding: "2em",
			// backgroundColor: "darkblue",
		},
		[theme.breakpoints.up("md")]: {
			// marginTop: "10vh",
			// margin: "14vh 5vw 14vh",
			padding: "12vh 10vw",
			height: "100vh",

			// padding: "2em",
			// backgroundColor: "darkblue",
		},
		[theme.breakpoints.up("lg")]: {
			// marginTop: "10vh",
			// margin: "14vh 5vw 14vh",
			padding: "14vh 10vw",
			height: "100vh",

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
const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
	},
});

let theme = createMuiTheme();
theme = responsiveFontSizes(darkTheme);

const Contact = () => {
	const classes = useStyles();
	const [modalIsOpen, setModalIsOpen] = React.useState(false);

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
			<ThemeProvider theme={darkTheme}>
				<StylesProvider injectFirst>
					<Paper className={classes.mainPaper}>
						<Grid
							container
							justify="center"
							alignItems="center"
							// spacing={1}
							className={classes.gridContainer}
						>
							<Grid
								item
								xs={12}
								// md={6}
								className={classes.gridItem}

								// style={{ backgroundColor: "pink" }}
							>
								<Paper className={classes.paper}>
									<Typography
										variant="h6"
										align="center"
										style={{
											color: "darkslategrey",
											paddingBottom: ".5rem",
										}}
									>
										Let's build together
									</Typography>
									<Typography
										variant="body1"
										color="textSecondary"
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
									<Paper className={classes.paper}>
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
															// width: "100%",
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
															// style={{
															// 	width: "100%",
															// }}
															variant="filled"
															// fullWidth
															// className={
															// 	classes.textField

															// classes={{
															// 	MuiInput: {
															// 		formControl: {
															// 			width:
															// 				"99%",
															// 			backgroundColor:
															// 				"pink",
															// 		},
															// 	},
															// }}
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
													<Button
														type="submit"
														onClick={handleModal}
													>
														submit
													</Button>

													<Modal
														isOpen={modalIsOpen}
														onRequestClose={() =>
															setModalIsOpen(
																false
															)
														}
														style={{
															overlay: {
																backgroundColor:
																	"gainsboro",
															},
															content: {
																color: "#234",
															},
														}}
													>
														<h2>
															Thanks for reaching
															out!
														</h2>
														<p>
															You should be
															receiving a
															confirmation email
															soon and can expect
															to hear back from me
															in the next few
															days.
														</p>

														<Button
															onClick={() =>
																setModalIsOpen(
																	false
																)
															}
														>
															X Close
														</Button>
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
									style={{
										width: "100%",
										padding: ".75rem .2rem 1rem",
									}}
								>
									<Grid item>
										<Typography
											variant="h5"
											align="center"
											style={{ color: "darkslategrey" }}
										>
											Let's Connect
										</Typography>
									</Grid>

									<Grid
										container
										justify="space-evenly"
										style={{ paddingTop: ".5rem" }}
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
														color:
															"rgba(67,118,178)",
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
														color: "rgba(42,45,49)",
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
														color:
															"rgb(94, 160,239)",
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
