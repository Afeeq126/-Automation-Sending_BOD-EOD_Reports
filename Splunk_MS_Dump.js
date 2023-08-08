function splunkDataDump() {

  var sss = SpreadsheetApp.openById("14uqPA8KLneTdAYg7PuOmKGwVKJQ");
  var sss1 = SpreadsheetApp.openById("1dZzDkY5tf3M-6NhPTgg31qOyGv_J0");

  var srsheet = sss.getSheetByName("Team Filter");
  var trsheet = sss1.getSheetByName("Splunk Dump Helper");
  var trsheet2 = sss1.getSheetByName("Splunk Dump");

  var srsheetlr = srsheet.getLastRow();
  var trsheetlr = trsheet.getLastRow() + 1;

  var data = srsheet.getRange(1,1,srsheetlr,6).getValues();

  trsheet.getRange(trsheetlr,1,srsheetlr,6).setValues(data);
  
  var sheet2lr = trsheet.getLastRow();
  var range1 = trsheet.getRange(1,7,sheet2lr,1);
  var range2 = trsheet.getRange(1,8,sheet2lr,1);
  var range3 = trsheet.getRange(1,9,sheet2lr,1);
  var range4 = trsheet.getRange(1,10,sheet2lr,1);
  range1.setFormula('=TEXT(A1,"mmmm")');
  range2.setFormula('=ArrayFormula("Q" & ROUNDUP(MONTH(A1)/3))');
  range3.setFormula('=YEAR(A1)');
  range4.setFormula("=INDEX('Helper Sheet'!$G$1:$G$12,MATCH(B1,'Helper Sheet'!$F$1:$F$12,0))");

  var trsheet1lr = trsheet.getLastRow();
  var trsheet2lr = trsheet2.getLastRow() + 1;

  var data2 = trsheet.getRange(1,1,trsheet1lr,10).getValues();
  trsheet2.getRange(trsheet2lr,1,trsheet1lr,10).setValues(data2);

  trsheet.clearContents();


}
