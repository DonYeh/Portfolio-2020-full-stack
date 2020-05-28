// require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { createProxyMiddleware } = require("http-proxy-middleware");
const { sendEmail } = require("./src/mail.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser);
// app.use(cors());

// app.use(
// 	"/api",
// 	createProxyMiddleware({
// 		target: "http://localhost:5000",
// 		changeOrigin: true,
// 	})
// );

app.get("/", (req, res) => {
	// resizeBy.send("welcome to my forms");
	res.send("Hello theresdfsfsdf");
});

app.post("/api/sendMail", (req, res) => {
	const emailData = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		message: req.body.message,
	};
	sendEmail(emailData);
	console.log(`backend server received the email data
	and has sent it to sendEmail()`);
});

const port = 5000;

app.listen(port, () => {
	console.log("server started at: ", port);
	// console.log(process.env.EMAIL_USER);
});
