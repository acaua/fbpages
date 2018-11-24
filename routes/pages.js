const express = require("express");

const router = express.Router();

router.get("/pages", (req, res) => {
  res.json({ pages: ["a", "b", "c"] });
});

router.get("/page/:id", (req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;
