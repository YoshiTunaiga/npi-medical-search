import express from "express";
// import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();

// // logging middleware
// app.use(morgan("dev"));

// if (process.env.NODE_ENV === "production") {
//   // body parsing middleware
//   app.use(express.json());

//   app.use(express.urlencoded({ extended: true }));

//   app.get("/", (req, res) =>
//     res.sendFile(path.join(__dirname, "..", "client/public/index.html"))
//   );

//   // static file-serving middleware
//   app.use(express.static(path.join(__dirname, "..", "client/public")));
// }

app.use(express.static("dist"));

app.get("/api/:id", async (req, res) => {
  try {
    const npId = req.params.id;
    // console.log(npId);
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

// sends index.html
// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "client/public/index.html"));
// });

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// module.exports = app;
