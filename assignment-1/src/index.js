// require('dotenv').config();

// const app = require('./notes.route');
// const connectDB = require('./config/db');

// const PORT = process.env.PORT || 3000;

// const startServer = async () => {

//   app.get("/", (req, res) => {
//     res.send("API is running 🚀");
//   });

//   try {
//     await connectDB(); //  DB first
//     console.log("ENV CHECK:", process.env.MONGO_URL);

//     app.listen(PORT, () => {
//       console.log(`Server running at http://localhost:${PORT}`);
//     });


//   } catch (error) {
//     console.error("Failed to start server:", error.message);
//   }
// };

// startServer();






require('dotenv').config();

const app = require('./notes.route');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

// ✅ Root route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ✅ 404 handler (keep at bottom)
app.use((req, res) => {
  res.status(404).send("Route not found here");
});

// ✅ Start server properly
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