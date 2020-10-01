const { Router } = require("express");
const config = require("config");
const shortid = require("shortid");
const Links = require("../model/Link");
const router = Router();

const auth = require("../middleware/auth.middleware");

// /api/link/generate
router.post("/generate", auth, async (req, res) => {
  try {
    const baseURL = config.get("baseURL");
    const { to } = req.body;
    const code = shortid.generate();

    const exist = await Links.findOne({ to });

    if (exist) {
      return res.status(200).json({ link: exist });
    }

    const from = baseURL + "/t/" + code;

    const link = new Links({ code, to, from, owner: req.user.userId });

    await link.save();
    res.status(201).json({ link });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
});

// /api/link/
router.get("/", auth, async (req, res) => {
  try {
    const links = await Links.find({ owner: req.user.userId });
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
});

// /api/link/:id
router.get("/:id", auth, async (req, res) => {
  try {
    const link = await Links.findById(req.params.id);
    console.log(link);
    res.status(200).json(link);
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
});

module.exports = router;
