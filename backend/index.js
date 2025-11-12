const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const corsOption = {
  origin: ["http://localhost:5173", process.env.FRONTEND_URL],
};
app.use(cors(corsOption));
const PORT = process.env.PORT || 8080;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Add this new route BEFORE your app.get("/{*splat}") route

app.get("/api/message", (req, res) => {
  res.json({ text: "Hello from the backend!" });
});


// The catch-all route should always be last
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
