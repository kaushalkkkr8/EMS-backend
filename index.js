const express = require("express");
const dotenv = require("dotenv");
const cors = require ('cors')
const { connection } = require("./db.connect");
const app = express();
dotenv.config();
app.use(express.json());

const auth = require("./Routes/authRoute");
const engineer = require("./Routes/engineerRoute");
const project = require("./Routes/projectRoute");
const assignment = require("./Routes/assignmentRoutes");


app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
app.get("/", (req, res) => {
  res.send("Hello! All Good");
});


app.use("/auth", auth);
app.use("/engineers", engineer);
app.use("/projects", project);
app.use("/assignments", assignment);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("App is running on port:", PORT);
});
