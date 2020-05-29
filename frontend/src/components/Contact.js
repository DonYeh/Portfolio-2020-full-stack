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
import Navbar from "./Navbar";
import { MyField } from "./MyField";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import axios from "axios";
import * as Yup from "yup";
import Error from "./Error";

const useStyles = makeStyles({
	// root: {
	// 	// borderBlock: "2px dotted",
	// 	border: "2px",
	// },

	gridContainer: {
		justify: "center",
		alignContent: "center",
		// width: "100vw",
		height: "100vh",
		background: "aliceblue",
		// padding: "1rem",
		// margin: "1rem",
	},
	gridItem: {
		background: "white",
		// padding: "2.5rem",
		// margin: "2.5rem",
	},
	paper: {
		background: "white",
		padding: "1.75rem",
		margin: "1rem",
	},
	hasError: {
		border: "1px solid #f44336",
		// border: "1px solid purple",
	},

	formMessage: {
		fontSize: "10px",
		paddingTop: "2px",
		"&$valid": {
			color: "#4caf50",
		},
		"&$invalid": {
			color: "#f44336",
		},
	},
});

const handleSubmit = async (values, actions) => {
	// const preventDefault = (event) =>
	// 	event.preventDefault();

	// setTimeout(() => {
	// 	alert(JSON.stringify(values, null, 2));
	// }, 1000);
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
		.required("must enter an email so that I can email you back!"),

	message: Yup.string()
		.max(255, "Must be shorter than 255 characters")
		.required(
			"well don't you want to say something? I'm not a mind reader...yet"
		),
});

const Contact = () => {
	const classes = useStyles();

	return (
		<>
			<Navbar />
			{/* <Box> */}
			<Grid
				container
				// alignItems="center"
				spacing={3}
				className={classes.gridContainer}
			>
				<Grid item xs={12} className={classes.gridItem}>
					<Paper className={classes.paper}>
						<Typography>Let's build together</Typography>
						<Typography>
							Have a project you're looking to get off the ground?
							I'd love to hear from you. Send a message to get the
							ball rolling.
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} className={classes.gridItem}>
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
							// validate={(values) => {
							// 	// values.firstName values.lastName values.email values.message
							// 	// errors.firstName errors.lastName errors.email errors.message
							// 	//errors.firstName= "this field is required"
							// 	let errors = {};

							// 	if (!values.firstName) {
							// 		errors.firstName = "Required";
							// 	}
							// 	if (!values.lastName) {
							// 		errors.lastName = "Required";
							// 	}
							// 	if (!values.email) {
							// 		errors.email = "Required";
							// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
							// 		errors.email = 'Invalid email'
							// 	}
							// 	if (!values.message) {
							// 		errors.message = "Required";
							// 	}

							// 	return errors;
							// }}
						>
							{
								({
									values,
									errors,
									touched,
									handleChange,
									handleBlur,
								}) => (
									<Form>
										<div>
											<Field
												name="firstName"
												component={MyField}
												label="first name"
											>
												<TextField
													name="firstName"
													// placeholder="first name"
													value={values.firstName}
													onChange={handleChange}
													onBlur={handleBlur}
													className={
														touched.firstName &&
														errors.firstName
															? "classes.hasError"
															: null
													}
												/>
											</Field>
											<Error
												touched={touched.firstName}
												message={errors.firstName}
											/>
										</div>

										<div>
											<Field
												name="lastName"
												component={MyField}
												label="last name"
											>
												<TextField
													name="lastName"
													// placeholder="last name"
													value={values.lastName}
													onChange={handleChange}
													onBlur={handleBlur}
													className={
														touched.lastName &&
														errors.lastName
															? "classes.hasError"
															: null
													}
												/>
											</Field>
											<Error
												touched={touched.lastName}
												message={errors.lastName}
												// className={
												// 	touched.lastName &&
												// 	errors.lastName
												// 		? "classes.hasError"
												// 		: null
												// }
											/>
										</div>

										<div
											className={
												touched.email && errors.email
													? "classes.hasError"
													: null
											}
										>
											<Field
												name="email"
												component={MyField}
												label="email"
											>
												<TextField
													name="email"
													// placeholder="email"
													value={values.email}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
											</Field>
											<Error
												touched={touched.email}
												message={errors.email}
											/>
										</div>
										<div
											className={
												touched.message &&
												errors.message
													? "classes.hasError"
													: null
											}
										>
											<Field
												name="message"
												component={MyField}
												label="message"
											>
												<TextField
													name="message here"
													// placeholder="email"
													value={values.message}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
											</Field>
											<Error
												touched={touched.message}
												message={errors.message}
											/>
										</div>
										<Button type="submit">submit</Button>
										{/* <pre>
												{JSON.stringify(
													values,
													null,
													2
												)}
											</pre> */}
									</Form>
								)

								// <div>Contact me herrrrrreee</div>
							}
						</Formik>
					</Paper>
				</Grid>
				<Grid item xs={12} className={classes.gridItem}>
					<Paper className={classes.paper}>
						<Typography>Let's Connect</Typography>
						<Typography>
							Social media links here
							<Link
								href="https://www.linkedin.com/in/donald-yeh-b3b1426/"
								// onClick={preventDefault}
								variant="body2"
							>
								{/* {'variant="body2"'} */}
								<LinkedInIcon />
							</Link>
							<Link
								href="https://github.com/DonYeh"
								// onClick={preventDefault}
								variant="body2"
							>
								{/* {'variant="body2"'} */}
								<GitHubIcon />
							</Link>
							<Link
								href="https://twitter.com/heydonaldyeh"
								// onClick={preventDefault}
								variant="body2"
							>
								{/* {'variant="body2"'} */}
								<TwitterIcon />
							</Link>
						</Typography>
					</Paper>
				</Grid>
			</Grid>
			{/* </Box> */}
		</>
	);
};

export default Contact;
