const express = require("express");
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  const { message, to } = req.body;

  try {
  const respo =  await client.messages.create({
      from: "whatsapp:+553140421708",
      to: `whatsapp:${to}`,
      body: `${message}`,
    });
    console.log("created", respo)

    return res.json({ ok: "ok" });
  } catch (err) {
    return res.json({ err });
  }
});

app.listen(1718, () => console.log("server started"));
