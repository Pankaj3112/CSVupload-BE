const CSV = require("../models/csv");

//method to send csvs
module.exports.home = async function (req, res) {
  let csvs = await CSV.find({});
  return res.json({ success: true, csvs });
};
