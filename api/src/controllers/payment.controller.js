const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-4845784497089801-071314-abf58aac96d8d07a310c5d5c3575363d-170585248",
});

const processPayment = async (req, res) => {
  try {
    const { total, title } = req.body;
    const preference = {
      items: [
        {
          title,
          quantity: 1,
          currency_id: "ARS",
          unit_price: Number(total),
        },
      ],
    };
    let result = await mercadopago.preferences.create(preference);
    console.log("here");
    console.log(result);
    res.status(201).send(result.body.init_point);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  processPayment,
};
