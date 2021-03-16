require("dotenv").config();
let express = require("express");
var cors = require("cors");
let app = express();
let server = require("http").Server(app);
let io = require("socket.io")(server);
let stream = require("./ws/stream");
let path = require("path");
let favicon = require("serve-favicon");

app.use(cors());
app.use(favicon(path.join(__dirname, "favicon.ico")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.of("/stream").on("connection", stream);

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`server is running on port ${port}`));

// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log("Express server listening on port", port);
// });
