const express = require("express");
const app = express();
const mongoose = require("mongoose");


const config = require("config");
const PORT = config.get("port") || 5000;

app.use(express.json({extended: true}));

app.use('/api/auth', require('./routes/auth.routes'));

app.use('/api/link', require('./routes/link.routes'));

app.use('/t', require('./routes/redirect.routes'));

(async function start() {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`Started on port ${PORT} ...`));
  } catch (error) {
    console.log("Server error", error);
    process.exit();
  }
})();
