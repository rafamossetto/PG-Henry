const mercadopago = require("mercadopago");
const User = require("../models/User");
const axios = require("axios");
const access_token =
  "TEST-4845784497089801-071314-abf58aac96d8d07a310c5d5c3575363d-170585248";

mercadopago.configure({
  access_token,
});

const config = {
  headers: {
    "Access-Control-Allow-Headers": "Authorization",
    Authorization: `Bearer ${access_token}`,
  },
};

const processPayment = async (req, res) => {
  try {
    const { total, description, parking_lot, extras, movie_title, date, time } =
      req.body;
    const user = await User.findById(req.userId);
    const preference = {
      items: [
        {
          title: description,
          quantity: 1,
          description: user.email,
          currency_id: "ARS",
          unit_price: Number(total),
        },
      ],
      auto_return: "approved",
      back_urls: {
        failure: "http://localhost:3000/products",
        pending: "http://localhost:3000/products",
        success: `http://localhost:3000/success/${req.userId}/`,
      },
    };
    let result = await mercadopago.preferences.create(preference);

    console.log(result.body);

    let newBooking = {
      id: result.body.id,
      payment_url: result.body.init_point,
      status: "processing",
      parking_lot,
      extras,
      movie_title,
      date,
      time,
    };

    let bookings = user.bookings;

    console.log(user);

    const updatedUser = await User.findByIdAndUpdate(req.userId, {
      bookings: [...bookings, newBooking],
    });
    console.log(updatedUser);

    res.status(201).send(result.body.init_point);
  } catch (error) {
    console.log(error);
  }
};

const updateBooking = async (req, res) => {
  try {
    const { status, preference_id } = req.body;
    const user = await User.findById(req.userId);
    const bookings = user.bookings.map((el) =>
      el.id === preference_id ? { ...el, status } : el
    );

    const updatedUser = await User.findByIdAndUpdate(req.userId, {
      bookings,
    });
    res.send("Ok");
  } catch (error) {
    console.log(error);
  }
};

const getPayments = async (req, res) => {
  try {
    let result = await axios.get(
      "https://api.mercadopago.com/v1/payments/search",
      config
    );
    let mapped = result.data.results.map((el) => {
      console.log(el.additional_info);
      return {
        id: el.id,
        email: el.additional_info.items
          ? el.additional_info.items[0].description
          : "",
        total: el.transaction_details.total_paid_amount,
        installments: el.installments, //cantidad de cuotas
        status: el.status,
        paidWith: el.payment_method_id,
        items: el.description,
      };
    });
    res.send(mapped);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  processPayment,
  updateBooking,
  getPayments,
};
