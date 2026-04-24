require('dotenv').config();

const app = require('./notes.route');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use((req, res) => {
  res.status(404).send("Route not found here");
});

const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();