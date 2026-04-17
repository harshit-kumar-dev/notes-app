require('dotenv').config();

const app = require('./notes.route');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

const startServer = async () => {

  app.get("/", (req, res) => {
    res.send("API is running 🚀");
  });
  
  try {
    await connectDB(); //  DB first
    console.log("ENV CHECK:", process.env.MONGO_URL);

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });


  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();