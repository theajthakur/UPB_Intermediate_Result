const { fetchUPMSPResult } = require("./result_content");
const cheerio = require("cheerio");

const fetchInterMediateResult = async (req, res) => {
  const { standard, district, roll } = req.params;
  const result = {};
  const data = await fetchUPMSPResult(standard, district, roll);
  if (typeof data === "object" && data.status === "error") {
    return res.status(500).json(data);
  }
  const $ = cheerio.load(data);
  result.name = $("#ctl00_cphBody_lbl_C_NAME").text();
  if (!result.name) {
    return res
      .status(404)
      .json({ status: "error", message: "Result not found" });
  }
  result.mother = $("#ctl00_cphBody_lbl_M_NAME").text();
  result.father = $("#ctl00_cphBody_lbl_F_NAME").text();
  result.stream = $("#ctl00_cphBody_lbl_GROUP").text();
  result.roll = roll;
  const marks = [];
  let totM = 0;
  const subjectIds = {
    10: {
      name: "ctl00_cphBody_lbl_Sub",
      theory: "ctl00_cphBody_lbl_Mrk",
      total: "ctl00_cphBody_lbl_Tot",
    },
    12: {
      name: "ctl00_cphBody_lbl_SUBJ_",
      theory: "ctl00_cphBody_lbl_PAP1_MK",
      total: "ctl00_cphBody_lbl_TOT_MRK",
    },
  };

  for (let i = 1; i <= 6; i++) {
    const tmp = {};
    tmp.subject = $(`#${subjectIds[standard].name}${i}`).text();
    if (!tmp.subject) break;
    tmp.obtained_theory = $(`#${subjectIds[standard].theory}${i}`).text();
    tmp.obtained_total = $(`#${subjectIds[standard].total}${i}`).text();
    tmp.practical =
      parseInt(tmp.obtained_total) - parseInt(tmp.obtained_theory);
    marks.push(tmp);
    totM += parseInt($(`#ctl00_cphBody_lbl_TOT_MRK${i}`).text());
  }
  result.marks = marks;
  result.percentage = totM / 5;
  return res.json(result);
};

module.exports = { fetchInterMediateResult };
