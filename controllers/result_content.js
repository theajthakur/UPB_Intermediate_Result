const puppeteer = require("puppeteer");

async function fetchUPMSPResult(standard = 12, districtCode = 45, rollNo) {
  let suffix = "ResultHighSchool";
  if (standard == 12) {
    suffix = "ResultIntermediate";
  }
  const mainUrl = `https://ubse.upmsp.edu.in/${suffix}.aspx`;

  // 1. Launch browser
  const browser = await puppeteer.launch({ headless: true }); // use headless: false to see it
  const page = await browser.newPage();

  // 2. Navigate to the target URL
  await page.goto(mainUrl, {
    waitUntil: "networkidle2",
  });

  // 3. Fill out the form
  await page.select("#ctl00_cphBody_ddl_districtCode", districtCode.toString());
  await page.type("#ctl00_cphBody_txt_RollNumber", rollNo); // Replace with actual selector

  // 4. Submit the form
  await Promise.all([
    page.click("#ctl00_cphBody_btnSubmit"), // Replace with actual submit button selector
    page.waitForNavigation({ waitUntil: "networkidle2" }),
  ]);

  // 5. Get the full HTML content of the resulting page
  const html = await page.content();

  // 6. Close browser
  await browser.close();

  return html;
}
module.exports = { fetchUPMSPResult };
