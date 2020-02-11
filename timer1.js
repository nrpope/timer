/*
Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
The user can specify an unlimited number of alarms using command line arguments

-input function. argv
-interval function
-loop? to call each argv
-output beep
*/

let myArgs = process.argv.slice(2);
myArgs.sort(function(a, b) {
  return a - b;
});
for (let i = 0; i < myArgs.length; i++) {
  if (isNaN && myArgs[i] >= 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, myArgs[i] * 1000);
  }
}
