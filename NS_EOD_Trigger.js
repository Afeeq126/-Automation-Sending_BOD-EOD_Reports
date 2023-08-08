function phase1Fri() {
  ScriptApp.newTrigger('phase2Fri')
  .timeBased()
  .onWeekDay(ScriptApp.WeekDay.SATURDAY)
  .atHour(3)
  .nearMinute(05)
  .create();

}
function phase2Fri() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const funname = 'sendEodFri';

   ScriptApp.getProjectTriggers().forEach(trigger => {
    trigger.getHandlerFunction() === funname ? ScriptApp.deleteTrigger(trigger) : 0; });

  
  ScriptApp.newTrigger(funname)
  .timeBased()
  .at(new Date(year, month, day, 5, 35))
  .create();
}

function sendEodFri() {
  splunkCsvDump();
  sendingEodQueueSpecific();
  eodDump();
  teamFilter();
  splunkDataDump();
}