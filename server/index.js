import express from "express";
import cors from "cors";
import { connect } from "./db/index.js";
import { log } from "./utilities/logs.js";
import authRoutes from "./auth/routes/authRoutes.js";
import meRoutes from "./api/routes/meRoutes.js";
import userRoutes from "./auth/routes/userRoutes.js";

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/me", meRoutes);
app.use("/api/users", userRoutes);

connect();

app.listen(PORT, () => {
  log(`Server avviato su http://localhost:${PORT}`);
});
