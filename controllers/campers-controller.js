import CampersModel from "../models/campers.js";

export const findCampers = async (req, res, next) => {
  const limit = req.query.limit ? req.query.limit : 10;
  const page = req.query.page ? req.query.page : 1;

  try {
    const result = await CampersModel.find()
      .limit(limit)
      .skip((page - 1) * limit);
    const total = await CampersModel.countDocuments();

    if (!result) {
      res.status(404).end();
    }

    res.json({ data: result, total: total, page: page, limit: limit });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
