const marge = require('mochawesome-report-generator');
const merge = require('mochawesome-merge');
const fs = require('fs');

const REPORTS_DIR = 'cypress/reports';
const MERGED_JSON = `${REPORTS_DIR}/merged-report.json`;

(async () => {
  try {
    // Merge all mochawesome JSON reports
    const jsonReport = await merge({
      files: [`${REPORTS_DIR}/mochawesome_*.json`]
    });

    // Write merged JSON as UTF-8 (no BOM)
    fs.writeFileSync(MERGED_JSON, JSON.stringify(jsonReport, null, 2), { encoding: 'utf8' });

    // Generate the HTML report
    await marge.create(jsonReport, {
      reportDir: `${REPORTS_DIR}/html`,
      reportFilename: 'index.html'
    });

    console.log('✅ Report generated: cypress/reports/html/index.html');
  } catch (err) {
    console.error('❌ Failed to generate report:', err);
  }
})();
