const axios = require("axios");

exports.handler = async (event) => {
  try {
    const formData = JSON.parse(event.body);
    const {
      departure,
      city,
      name,
      age,
      height,
      weight,
      shoesnumber,
      foodspecifics,
      otherspecifics,
      phone,
      phone2,
    } = formData;

    const telegramToken = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const message = `New Application:\n\nDeparture: ${departure}\nCity: ${city}\nName: ${name}\nAge: ${age}\nHeight: ${height} cm\nWeight: ${weight} kg\nShoes Number: ${shoesnumber}\nFood Specifics: ${foodspecifics}\nOther Specifics: ${otherspecifics}\nParent's Phone: ${phone}\nChild's Phone: ${phone2}`;

    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    await axios.post(url, {
      chat_id: chatId,
      text: message,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Application submitted successfully!" }),
    };
  } catch (error) {
    console.error("Error submitting application:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error submitting application" }),
    };
  }
};
