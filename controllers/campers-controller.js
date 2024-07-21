import CampersModel from "../models/campers.js";

export const findCampers = async (req, res, next) => {
  console.log(req.query);
  const limit = req.query.limit ? req.query.limit : 10;
  const page = req.query.page ? req.query.page : 1;

  const query = {};
  const queryDetails = {};

  if (req.query.location && req.query.location.trim().length > 0) {
    query.location = new RegExp(req.query.location, "i");
  }
  if (req.query.form && req.query.form.trim().length > 0) {
    query.form = req.query.form;
  }
  if (req.query.transmission && req.query.transmission.trim() === "true") {
    query.transmission = "automatic";
  }

  if (req.query.details_shower && req.query.details_shower.trim() === "true") {
    query["details.shower"] = { $gt: 0 };
  }
  if (
    req.query.details_airConditioner &&
    req.query.details_airConditioner.trim() === "true"
  ) {
    query["details.airConditioner"] = { $gt: 0 };
  }
  if (
    req.query.details_kitchen &&
    req.query.details_kitchen.trim() === "true"
  ) {
    query["details.kitchen"] = { $gt: 0 };
  }
  if (req.query.details_TV && req.query.details_TV.trim() === "true") {
    query["details.TV"] = { $gt: 0 };
  }

  try {
    const result = await CampersModel.find(query)
      .limit(limit)
      .skip((page - 1) * limit);
    const total = await CampersModel.countDocuments(query);

    if (!result) {
      res.status(404).end();
    }

    res.json({
      data: result,
      total: total,
      page: Number(page),
      limit: Number(limit),
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
