import express from "express";
const app = express();
// import fetch from "node-fetch";
import cors from "cors";

// const corsOptions = {
//   origin: ["http://localhost:5173"],
// };

// app.use(cors(corsOptions));
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

// app.get("/api/:id", cors(corsOptionsDelegate), (req, res, next) => {
//   console.log(res);
//   res.json({ fruits: ["apple", "strawberry", "pineapple"] });
// });

// app.get("/api/:id", cors(corsOptionsDelegate), function (req, res, next) {
//   request({
//     uri: `https://npi-db.org/api${req.params.id}`,
//   });
// });

app.get("/api/:id", cors(corsOptionsDelegate), async (req, res) => {
  const id = req.params.id;
  const url = `https://npi-db.org/api/${id}`;
  // console.log(id);
  try {
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
