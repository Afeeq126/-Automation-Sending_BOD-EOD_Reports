function phase1TueBod() {
  ScriptApp.newTrigger('dateandtritue')
  .timeBased()
  .onWeekDay(ScriptApp.WeekDay.TUESDAY)
  .atHour(07)
  .nearMinute(20)
  .create();

}
function phase2TueBod() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const funname1 = 'sendBodTue';

   ScriptApp.getProjectTriggers().forEach(trigger => {
    trigger.getHandlerFunction() === funname1 ? ScriptApp.deleteTrigger(trigger) : 0; });

  
  ScriptApp.newTrigger(funname1)
  .timeBased()
  .at(new Date(year, month, day, 12, 10))
  .create();
}

function sendBodTue() {
 sendingBod();
}

function dateandtritue() {
 dateInsert();
 phase2TueBod();
 clearComments();
}