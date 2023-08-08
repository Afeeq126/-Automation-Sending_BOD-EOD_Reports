function splunkCsvDump() {

  var threads = GmailApp.search('subject:"Splunk Report"');
  var messages = threads[0].getMessages();
  messages.reverse();
  var attachemnts = messages[0].getAttachments()[0];
  attachemnts.setContentType("text/csv");

  if (attachemnts.getContentType() === "text/csv"){
    
    var sheetss = SpreadsheetApp.openById("14bTPA8KLneTdAYg7PusJQ");
    var sheet1 = sheetss.getSheetByName("Splunk Dump");
    var csvData = Utilities.parseCsv(attachemnts.getDataAsString(), ",");

    sheet1.clearContents().clearFormats();
    sheet1.getRange(1,1, csvData.length, csvData[0].length).setValues(csvData);

  }
}