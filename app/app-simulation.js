import express from "express";
import fs from "fs";

const app = express();
const port = 8080;

app.use(express.text());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`http://localhost:${port}/data`);
});

app.get("/data", (req, res) => {
  res.status(200).send("Data GET request received.");
});

app.post("/data", (req, res) => {
  let data = req.body;
  fs.appendFile(
    "data.csv",
    `${data.rainValue},${data.ultrasonicDistance}\n`,
    (err) => {
      if (err) throw err;
      console.log(
        `Rain value: ${data.rainValue}\nUltrasonic Distance: ${data.ultrasonicDistance}`
      );
      console.log("Data written to file");
    }
  );
  res.status(200).send({ message: "Data received" });
});
