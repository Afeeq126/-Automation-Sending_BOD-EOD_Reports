function teamFilter() {

  var ss1 = SpreadsheetApp.openById("14uqbTPA8KTdAYg7PusK-NOmKGwVKJQ");
  var ss2 = SpreadsheetApp.openById("14uqPA8KLnAYgusbzZ69BK-UMpmKGwVKJQ");

  var sheet1 = ss1.getSheetByName("Splunk Dump");
  var sheet2 = ss2.getSheetByName("Team Filter");

  sheet2.clearContents().clearFormats();

  var sheet1lastrow = sheet1.getLastRow();
  var sheet2lastrow = sheet2.getLastRow();
  var sortrange = sheet1.getSheetValues(2,1,sheet1lastrow,5);
  var sheet1counter = 1;

   //Filtering data by auditors name
   for (var i = 1; i <= sortrange.length; i++){
    var name = sheet1.getRange(i,1).getValue();
    console.log(i + "-" + name)

    if (name == "Auditor1"){
      var rowvalues = sheet1.getRange(i,1,1,5).getValues();
      sheet2.getRange(sheet2lastrow+sheet1counter,2,1,5).setValues(rowvalues);
      sheet1counter++;
    }
    if (name == "Auditor2"){
      var rowvalues = sheet1.getRange(i,1,1,5).getValues();
      sheet2.getRange(sheet2lastrow+sheet1counter,2,1,5).setValues(rowvalues);
      sheet1counter++;
    }
    if (name == "Auditor3"){
      var rowvalues = sheet1.getRange(i,1,1,5).getValues();
      sheet2.getRange(sheet2lastrow+sheet1counter,2,1,5).setValues(rowvalues);
      sheet1counter++;
    }
    if (name == "Auditor4"){
      var rowvalues = sheet1.getRange(i,1,1,5).getValues();
      sheet2.getRange(sheet2lastrow+sheet1counter,2,1,5).setValues(rowvalues);
      sheet1counter++;
    }
    if (name == "Auditor5"){
      var rowvalues = sheet1.getRange(i,1,1,5).getValues();
      sheet2.getRange(sheet2lastrow+sheet1counter,2,1,5).setValues(rowvalues);
      sheet1counter++;
    }
    if (name == "Auditor6"){
      var rowvalues = sheet1.getRange(i,1,1,5).getValues();
      sheet2.getRange(sheet2lastrow+sheet1counter,2,1,5).setValues(rowvalues);
      sheet1counter++;
    }
    if (name == "Auditor7"){
      var rowvalues = sheet1.getRange(i,1,1,5).getValues();
      sheet2.getRange(sheet2lastrow+sheet1counter,2,1,5).setValues(rowvalues);
      sheet1counter++;
    }
    if (name == "Auditor8"){
      var rowvalues = sheet1.getRange(i,1,1,5).getValues();
      sheet2.getRange(sheet2lastrow+sheet1counter,2,1,5).setValues(rowvalues);
      sheet1counter++;
    }
    if (name == "Auditor9"){
      var rowvalues = sheet1.getRange(i,1,1,5).getValues();
      sheet2.getRange(sheet2lastrow+sheet1counter,2,1,5).setValues(rowvalues);
      sheet1counter++;
    }
    if (name == "Auditor10"){
      var rowvalues = sheet1.getRange(i,1,1,5).getValues();
      sheet2.getRange(sheet2lastrow+sheet1counter,2,1,5).setValues(rowvalues);
      sheet1counter++;
    }
    if (name == "Auditor11"){
      var rowvalues = sheet1.getRange(i,1,1,5).getValues();
      sheet2.getRange(sheet2lastrow+sheet1counter,2,1,5).setValues(rowvalues);
      sheet1counter++;
    }
  }

  var timeZone = CalendarApp.getDefaultCalendar().getTimeZone();
  var date = new Date();
  var day = Utilities.formatDate(date, timeZone,"MM-dd-yyyy");
  var now = day;


  var rangeInsert = sheet2.getRange(1,1,sheet2.getLastRow(),1);
  rangeInsert.setValue(now);
  
}
