function eodDump() {
  var ss = SpreadsheetApp.openById("14uT8KLneTdAYg7POmKGwVKJQ");
  var ss1 = SpreadsheetApp.openById("1dZzkY5tf3M-6Ndq31qOyGv_J0");

  var srSheet = ss.getSheetByName("EOD Dump Templete");
  var trSheet = ss1.getSheetByName("EOD Dump");
  var trSheetlr = trSheet.getLastRow() + 1;
  
  var timeZone = CalendarApp.getDefaultCalendar().getTimeZone();
  var date = new Date();
  var day = Utilities.formatDate(date, timeZone,"MM-dd-yyyy");
  var now = day;

  srSheet.getRange(2,1,srSheet.getLastRow()-1,1).setValue(now);

  var srData = srSheet.getRange("EOD Dump Templete!A2:J12").getValues();

  trSheet.getRange(trSheetlr,1,11,10).setValues(srData);
  var trSheetlr1 = trSheet.getLastRow()-1;
  var range1 = trSheet.getRange(2,11,trSheetlr1,1);
  var range2 = trSheet.getRange(2,12,trSheetlr1,1);
  var range3 = trSheet.getRange(2,13,trSheetlr1,1);
  range1.setFormula('=IFERROR(INDEX(Quality!$G:$G,MATCH(A2&B2,Quality!$A:$A&Quality!$L:$L,0)),"-")')
  range2.setFormula('=IFERROR(INDEX(Calibrations!$D:$D,MATCH(A2&B2,Calibrations!$B:$B&Calibrations!$F:$F,0)),0)');
 
  srSheet.getRange(2,1,11,1).clearContent();
  
}
