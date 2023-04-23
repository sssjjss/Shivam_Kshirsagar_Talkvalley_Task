const router = require("express").Router();
const { fetchAllAds } = require("../controllers/ads.controller");

router.get("/", fetchAllAds);
module.exports = router;
