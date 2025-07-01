const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://nicolascallaghan:RNfXlWUwO2Ymow1p@cluster0.2wp4bta.mongodb.net/TicketHack";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
