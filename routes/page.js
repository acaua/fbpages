const express = require("express");
const FB = require("fb").default;

const router = express.Router();

router.get("/:id", (req, res) => {
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

router.get("/:id/feed", (req, res) => {
  FB.api(
    `/${req.params.id}/feed`,
    {
      access_token: req.query.access_token
    },
    fb_response => {
      if (!fb_response || fb_response.error) return res.sendStatus(500);

      return res.json(fb_response.data);
    }
  );
});

module.exports = router;
