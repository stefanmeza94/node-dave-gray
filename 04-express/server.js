const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3500;

// "^/$|/index(.html)?" this saying that we accept in this route everything that start and end with / also we can access this route only with typing index without .html, or in other words (.html)? is saying that this part is optional
app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "new-page.html");
});

// route handlers
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("Attempted to load hello.html");
    next();
  },
  (req, res) => {
    res.send("Hello world");
  }
);

const one = (req, res, next) => {
  console.log("One");
  next();
};
const two = (req, res, next) => {
  console.log("Two");
  next();
};
const three = (req, res, next) => {
  console.log("Three");
  res.send("Finished");
};

app.get("/chain(.html)?", [one, two, three]);

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
