const mercadopago = require("mercadopago");
const User = require("../models/User");

mercadopago.configure({
  access_token:
    "TEST-4845784497089801-071314-abf58aac96d8d07a310c5d5c3575363d-170585248",
});

const processPayment = async (req, res) => {
  try {
    const { total, description, parking_lot, extras, movie_title, date, time } =
      req.body;

    const preference = {
      items: [
        {
          title: description,
          quantity: 1,
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

    const user = await User.findById(req.userId);
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

module.exports = {
  processPayment,
  updateBooking,
};
