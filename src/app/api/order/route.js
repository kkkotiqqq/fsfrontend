const { NextResponse } = require("next/server");
const nodemailer = require("nodemailer");

async function POST(request) {
  const { email, name, product } = await request.json();

  const emailMessage =
    "Email: " +
    email +
    "\n" +
    "Имя: " +
    name +
    "\n" +
    "Название товара: " +
    product;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, // uncomment this line if you want to send a copy to the sender
    subject: `Заказ с сайта Fslight`,
    text: emailMessage,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

module.exports = { POST };
