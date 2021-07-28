import axios from "axios";


export async function adminContact({ name, email, phone, subject, message }) {
  try {
    let response = await axios.post('https://movies-henry-app.herokuapp.com/faqs', {
      name,
      email,
      phone,
      subject,
      message,
    })
    return response.data.message
  } catch (error) {
    console.log(error)
  }
}