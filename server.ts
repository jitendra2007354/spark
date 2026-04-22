import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Database Connection Factory
async function getDbConnection() {
  try {
    return await mysql.createConnection(process.env.DATABASE_URL || "mysql://root:password@localhost:3306/spark_db");
  } catch (error) {
    console.error("Database Connection Error:", error);
    return null;
  }
}

// API Routes
app.post("/api/verify-password", async (req, res) => {
  const { password } = req.body;
  const db = await getDbConnection();
  
  if (!db) {
    // Fallback for demo if no DB is configured
    if (password === "spark2026") return res.json({ success: true });
    return res.status(500).json({ success: false, message: "Database connection failed" });
  }

  try {
    const [rows]: any = await db.execute("SELECT * FROM credentials WHERE key_name = 'provisioning_key' AND key_value = ?", [password]);
    if (rows.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  } finally {
    await db.end();
  }
});

app.post("/api/save-form", async (req, res) => {
  const { type, data } = req.body;
  const db = await getDbConnection();
  
  if (!db) {
    console.log("Mock Saving Form:", { type, data });
    return res.json({ success: true, message: "Mock saved" });
  }

  try {
    const query = "INSERT INTO form_submissions (type, payload, created_at) VALUES (?, ?, NOW())";
    await db.execute(query, [type, JSON.stringify(data)]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to save data" });
  } finally {
    await db.end();
  }
});

// Vite Middleware for Dev
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
