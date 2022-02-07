const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });
const mongoose = require("mongoose");

//update connection url with password
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    //below options are added for avoiding warnings
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected successfully"));

//require after env files is read
const app = require("./app");

app.listen("8080", () => {
  console.log("listening at 8080");
});
