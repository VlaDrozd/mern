const { Router } = require("express");
const Links = require("../model/Link");
const router = Router();

// /t/:code
router.get("/:code", async (req, res) => {
  try {
    console.log("TTTT");

    const link = await Links.findOne({ code: req.params.code });

    if (link) {
      link.clicks++;
      link.save();
      return res.redirect(link.to);
    }

    return res.status(404).json({message: 'Not found'});
  } catch (error) {
    res.status(400).json({ message: "Server Error" });
  }
});

module.exports = router;
