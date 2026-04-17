require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(); //  DB first
    console.log("ENV CHECK:", process.env.MONGO_URL);

    if (process.env.NODE_ENV !== "production") {
      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });
    }


  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();