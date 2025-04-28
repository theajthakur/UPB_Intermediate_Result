const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://upb-intermediate-result-front-end.vercel.app",
      "https://upmsp.vercel.app/",
    ],
  })
);
const interRouter = require("./routes/intermediate");

app.use("/", interRouter);

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
