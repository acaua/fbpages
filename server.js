const express = require("express");
const path = require("path");

const page = require("./routes/page");
const pages = require("./routes/pages");

const app = express();

app.use("/api/page", page);
app.use("/api/pages", pages);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
