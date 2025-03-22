import express from "express";
import {
  getAllBooks,
  createBook,
  deleteBook,
  updateBook, // ← NY
} from "../controllers/bookController";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

export default router;
