function phase1Wed() {
  ScriptApp.newTrigger('phase2wed')
  .timeBased()
  .onWeekDay(ScriptApp.WeekDay.WEDNESDAY)
  .atHour(16)
  .nearMinute(05)
  .create();

}
function phase2wed() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const funname = 'sendEodWed';

   ScriptApp.getProjectTriggers().forEach(trigger => {
    trigger.getHandlerFunction() === funname ? ScriptApp.deleteTrigger(trigger) : 0; });

  
  ScriptApp.newTrigger(funname)
  .timeBased()
  .at(new Date(year, month, day, 21, 40))
  .create();
}

function sendEodWed() {
  splunkCsvDump();
  sendingEodQueueSpecific();
  eodDump();
  teamFilter();
  splunkDataDump();
}