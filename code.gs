function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const timestamp = new Date();

    sheet.appendRow([timestamp, data.name, data.quantity]);
    return ContentService.createTextOutput("Data saved successfully.");
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.message);
  }
}
