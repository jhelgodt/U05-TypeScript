import express from "express";
import {
  getAllBooks,
  createBook,
  deleteBook,
} from "../controllers/bookController";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);
router.delete("/:id", deleteBook);

export default router;
