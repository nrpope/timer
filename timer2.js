const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
let numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

stdin.on("data", key => {
  process.stdout.write(key);

  if (numbersArray.includes(key)) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }

  if (key === "b") {
    process.stdout.write("\x07");
  }
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});
