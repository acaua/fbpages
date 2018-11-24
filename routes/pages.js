const express = require("express");
const FB = require("fb").default;

const router = express.Router();

router.get("/pages", (req, res) => {
  FB.api(
    "/me/accounts",
    { access_token: req.query.access_token },
    fb_response => {
      if (!fb_response || fb_response.error) return res.sendStatus(500);

      return res.json(fb_response.data);
    }
  );
});

router.get("/page/:id", (req, res) => {
  FB.api(
    `/${req.params.id}`,
    {
      access_token: req.query.access_token,
      fields: "about, name, category, fan_count, id, description"
    },
    fb_response => {
      if (!fb_response || fb_response.error) return res.sendStatus(500);

      return res.json(fb_response);
    }
  );
});

module.exports = router;
