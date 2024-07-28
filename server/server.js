import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

var allowlist = [
  "http://localhost:5173",
  "http://localhost:8080",
  "https://npi-db.org",
  "https://yoshitunaiga.github.io/npi-medical-search",
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

app.get("/api/:npId", cors(corsOptionsDelegate), async (req, res) => {
  try {
    const npId = req.params.npId;
    const url = `https://npi-db.org/api/${npId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
