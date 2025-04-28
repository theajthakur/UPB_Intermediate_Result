const express = require("express");
const router = express.Router();
const { fetchInterMediateResult } = require("../controllers/intermediate");

router.get("/:standard/:district/:roll", fetchInterMediateResult);

router.get("/", (req, res) => {
  res.send("Please provide a roll number.");
});

module.exports = router;
