function sendingBod() {
  const ss = SpreadsheetApp.openById("14uqbTPA8KLneTdAYg7pbNOmKGwVKJQ");
  const bodTemplete = ss.getSheetByName("BOD Templete");

   const head1 = bodTemplete.getRange("A1:D1").getValues();
   const manag = head1[0][0];
   const managname = head1[0][1];
   const head2 = bodTemplete.getRange("A2:D2").getValues();
   const process = head2[0][0];
   const processname = head2[0][1];
   const pocs = bodTemplete.getRange("A3:D3").getValues();
   const poc = pocs[0][0];
   const pocname = pocs[0][1];
   const headers = bodTemplete.getRange("A4:D4").getValues();
   const auditor = headers[0][0];
   const task = headers[0][1];
   const timeoff = headers[0][2];
   const notes = headers[0][3];

  const lr = bodTemplete.getLastRow();

  const bodtablevalues = bodTemplete.getRange(5, 1,lr-4,4).getDisplayValues();


  const bodhtmlTemplete = HtmlService.createTemplateFromFile("BOD");


  bodhtmlTemplete.manag = manag;
  bodhtmlTemplete.managname = managname;
  bodhtmlTemplete.process = process;
  bodhtmlTemplete.processname = processname;
  bodhtmlTemplete.poc = poc;
  bodhtmlTemplete.pocname = pocname;
  bodhtmlTemplete.auditor = auditor;
  bodhtmlTemplete.task = task;
  bodhtmlTemplete.timeoff = timeoff;
  bodhtmlTemplete.notes = notes;
  bodhtmlTemplete.bodtablevalues = bodtablevalues;

  const bodhtmlForEmail = bodhtmlTemplete.evaluate().getContent();
  //console.log(bodhtmlForEmail);

  const date = Utilities.formatDate(new Date(),Session.getTimeZone,"dd-MM-yyyy");
  const subject = " BOD REPORT - " + date;
  const mailCc = "abc@gmail.com" + "," + "sas@gmail.com";
  const bodmailID = "asd@gmail.com";
  const senderName = "AfeeqZ";
  GmailApp.sendEmail(bodmailID,subject, "test",
  { name:senderName,
    cc: mailCc,
    htmlBody: bodhtmlForEmail }
  );
}