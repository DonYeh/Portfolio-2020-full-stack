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
app.use(cookieParser);
app.use(cors());

app.use(
	"/api",
	createProxyMiddleware({
		target: "http://localhost:5000",
		changeOrigin: true,
	})
);

app.get("/", (req, res) => {
	resizeBy.send("welcome to my forms");
	res.send("Hello there");
});

app.post("/api/sendMail", (req, res) => {
	sendEmail();
	console.log("message was posted", req.body);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log("server started at: ", port);
	// console.log(process.env.EMAIL_USER);
});
