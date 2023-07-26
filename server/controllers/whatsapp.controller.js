import { env } from "../config.js";
import wbm from "wbm";

export const sentOrder = async (req, res) => {
  var botId = env.BOTID;
  var phoneNbr = env.PHONENBR;
  var bearerToken = env.TOKEN;
  console.log(bearerToken);
  var url = "https://graph.facebook.com/v17.0/" + botId + "/messages";
  var data = {
    messaging_product: "whatsapp",
    to: phoneNbr,
    type: "template",
    template: {
      name: "hello_world",
      language: { code: "en_US" },
    },
  };

  var postReq = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + bearerToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    json: true,
  };

  console.log(postReq);

  fetch(url, postReq)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
};

export const sentOrder2 = async (req, res) => {
  wbm
    .start()
    .then(async () => {
      const phone = ["573115418488"];
      const message = "asdadasdasd";
      await wbm.sent(phone, message);
      await wbm.end();
    })
    .catch((err) => console.log(err));
};
