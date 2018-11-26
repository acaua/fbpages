const express = require("express");
const FB = require("fb").default;

const router = express.Router();

router.get("/", (req, res) => {
  FB.api(
    "/me/accounts",
    { access_token: req.query.access_token },
    fb_response => {
      if (!fb_response || fb_response.error) return res.sendStatus(500);

      return res.json(fb_response.data);
    }
  );
});

module.exports = router;
