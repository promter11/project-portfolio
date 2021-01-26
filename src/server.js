const express = require("express");
const bodyParser = require("body-parser");
const main = require("./nodemailer");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const info = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_SEND_TO,
    subject: "Форма на сайте-портфолио",
    html: `
      <div>
        <p>Доставлено новое сообщение из формы на сайте.</p>
        <hr />
        <p>Контактная информация:</p>
        <p><b>Имя:</b> ${name}</p>
        <p><b>Электронная почта:</b> ${email}</p>
        <br />
        <p>${message}</p>
      </div>
    `,
  };

  main(info).catch(console.error);
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`App listening on ${process.env.SERVER_PORT} port.`);
});
