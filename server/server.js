import express from "express";
import cors from "cors";

const app = express();

var allowlist = [
  "http://localhost:5173",
  "https://npi-db.org",
  "https://yoshitunaiga.github.io/npi-medical-search/",
];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.get("/api/:id", cors(corsOptionsDelegate), async (req, res) => {
  try {
    const id = req.params.id;
    const url = `https://npi-db.org/api/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data.npi);
    res.json(data);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
