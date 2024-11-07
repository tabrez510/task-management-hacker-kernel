const ExcelJS = require("exceljs");

class ExcelUtils {
  static createWorkbook() {
    return new ExcelJS.Workbook();
  }

  static addWorksheet(workbook, sheetName, headers) {
    const sheet = workbook.addWorksheet(sheetName);
    sheet.addRow(headers);
    return sheet;
  }

  static addRows(sheet, data) {
    data.forEach((row) => sheet.addRow(row));
  }

  static async exportWorkbook(res, workbook, filename) {
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    await workbook.xlsx.write(res);
    res.end();
  }
}

module.exports = ExcelUtils;
