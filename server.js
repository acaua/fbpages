const express = require("express");

const pages = require("./routes/pages");

const app = express();
app.use("/api/", pages);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
