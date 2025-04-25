const { fetchUPMSPResult } = require("./result_content");

const fetchInterMediateResult = async (req, res) => {
  const { roll } = req.params;
  const data = await fetchUPMSPResult(roll);
  return res.send(data);
};

module.exports = { fetchInterMediateResult };
