require("dotenv").config();

const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

const sendEmail = () => {
	const mail = {
		from: "stranger@danger.com",
		to: "donalducky@gmail.com",
		subject: "sending mail through node.js",
		text: "my message here 5 w/ ENV credentials!",
	};

	smtpTransport.sendMail(mail, (err, response) => {
		if (err) {
			console.log(err);
		} else {
			console.log("email has been sent!", response);
		}
		smtpTransport.close();
	});

	console.log("mail sent! from sendEmail");
};

// sendEmail();
module.exports = { sendEmail };
