const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const dotenv = require("dotenv")
const { connectDB } = require("./utils/db.js")
const healthRoutes = require("./routes/health.js")
const protectedRoutes = require("./routes/protected.js")

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api', healthRoutes);
app.use('/api', protectedRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = {app}
