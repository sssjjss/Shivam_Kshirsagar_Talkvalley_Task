const AdModel = require("../models/ads.model");

class AdsControllers {
  static fetchAllAds(req, res) {
    const { q } = req.query;
    let filter = {};
    const qExp = new RegExp(q, "i");
    

    AdModel.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "companyId",
          as: "company",
        },
      },
      {
        $unwind: "$company",
      },
      {
        $match: {
          $or: [
            { primaryText: qExp },
            { headline: qExp },
            { description: qExp },
            { "company.name": qExp },
            { "company.url": qExp },
          ],
        },
      },
    ])
      .then((result) => {
        res
          .status(200)
          .send({ message: "ads fetched successfully...", data: result });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ message: "Could not fetch ads...", error: err });
      });
  } //fetchAllAds
}
module.exports = AdsControllers;
