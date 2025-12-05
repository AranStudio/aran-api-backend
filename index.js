import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import deckRouter from "./routes/generate-deck.js";
import imagesRouter from "./routes/generate-images.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/api/generate-deck", deckRouter);
app.use("/api/generate-images", imagesRouter);

// For local dev
const port = process.env.PORT || 3001;
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Creative Deck API listening on port ${port}`);
  });
}

export default app;
