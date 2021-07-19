const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

mongoose.connect("mongodb://localhost:27017/task_performance", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// each of these sub-tasks are associated with a meta-task
const dataEntrySchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  job: String,
  department: String,
  address: String,
  city: String,
  state: String,
  zip_code: Number,
});

const imageSearchSchema = new mongoose.Schema({
  imageNumber: Number,
  imageOrientation: String,
  hasContraband: Boolean,
});

const participantDataSchema = new mongoose.Schema({
  dataEntries: [dataEntrySchema],
  imageSearches: [imageSearchSchema],
  email: String,
});

const ParticipantData = mongoose.model(
  "ParticipantData",
  participantDataSchema
);

/*******************************
 * participant data endpoints
 *******************************/
app.post("/api/data", async (req, res) => {
  const participant = new ParticipantData({
    email: req.body.email,
  });
  try {
    await participant.save();
    res.send(participant);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/:id/taskData", async (req, res) => {
  try {
    let user = await ParticipantData.findOne({ _id: req.params.id });
    if (!user) {
      res.sendStatus(404);
      return;
    }
    user.dataEntries = req.body.dataEntries;
    user.imageSearches = req.body.imageSearches;
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/data/:email/surveyAnswers", async (req, res) => {
  if (req.params.email === "undefined") {
    res.status(404).send("participant undefined");
    console.log("I'm undefined");
    return;
  }
  try {
    let user = await ParticipantData.findOne({ _id: req.params.email });
    if (!user) {
      res.sendStatus(404);
      return;
    }
    user.surveyAnswers = user.surveyAnswers.concat(req.body.surveyAnswers);
    await user.save();
    res.status(200).send(user.surveyAnswers);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Server listening on port 3000!"));
