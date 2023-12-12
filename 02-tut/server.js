const fsPromises = require("fs").promises;
const path = require("path");

async function fileOps() {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf8");
    console.log(data);

    await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data);
    await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nNice to meet you");
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );

    const newData = await fsPromises.readFile(path.join(__dirname, "files", "promiseComplete.txt"), "utf8");
    console.log(newData);
  } catch (error) {
    console.error(error);
  }
}

fileOps();
// fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf8", function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });

console.log("hello...");

// fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Nice to meet you!", function (err) {
//   if (err) throw err;
//   console.log("Write complete!");

//   fs.appendFile(path.join(__dirname, "files", "reply.txt"), "\nYes it is!", function (err) {
//     if (err) throw err;
//     console.log("Appending to file completed!");

//     fs.rename(
//       path.join(__dirname, "files", "reply.txt"),
//       path.join(__dirname, "files", "newReply.txt"),
//       function (err) {
//         if (err) throw err;
//         console.log("Rename completed");
//       }
//     );
//   });
// });

process.on("uncaughtException", function (err) {
  console.error(`There was an uncaught error ${err}`);
  process.exit(1);
});
