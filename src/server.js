const express = require("express");
const bodyParser = require("body-parser");
const mailer = require("./nodemailer");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const info = {
    from: `"Portfolio Mailer" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_SEND_TO,
    subject: "Форма на сайте-портфолио",
    html: `
      <div>
        <h3>Доставлено новое сообщение из формы на сайте.</h3>
        <br />
        <p><b>Имя:</b> ${name}</p>
        <p><b>Электронная почта:</b> ${email}</p>
        <p><b>Сообщение:</b> ${message}</p>
      </div>
    `,
  };

  mailer(info).catch(console.error);
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening on ${process.env.SERVER_PORT} port.`);
});
