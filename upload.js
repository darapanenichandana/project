import express from "express";
import multer from "multer";
import { extractText } from "../services/extractor.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/upload", upload.single("document"), async (req, res) => {
  try {
    const filePath = req.file.path;
    const extractedText = await extractText(filePath);
    res.json({ success: true, text: extractedText });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;