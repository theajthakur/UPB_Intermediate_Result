const { fetchUPMSPResult } = require("./result_content");
const cheerio = require("cheerio");

const fetchInterMediateResult = async (req, res) => {
  const { roll } = req.params;
  const result = {};
  const data = await fetchUPMSPResult(roll);
  const $ = cheerio.load(data);
  result.name = $("#ctl00_cphBody_lbl_C_NAME").text();
  result.mother = $("#ctl00_cphBody_lbl_M_NAME").text();
  result.father = $("#ctl00_cphBody_lbl_F_NAME").text();
  result.stream = $("#ctl00_cphBody_lbl_GROUP").text();
  const marks = [];
  for (let i = 1; i <= 5; i++) {
    const tmp = {};
    tmp.subject = $(`#ctl00_cphBody_lbl_SUBJ_${i}`).text();
    tmp.obtained_theory = $(`#ctl00_cphBody_lbl_PAP1_MK${i}`).text();
    tmp.obtained_total = $(`#ctl00_cphBody_lbl_TOT_MRK${i}`).text();
    tmp.practical =
      parseInt(tmp.obtained_total) - parseInt(tmp.obtained_theory);
    marks.push(tmp);
  }
  result.marks = marks;
  return res.json(result);
};

module.exports = { fetchInterMediateResult };
