import express from "express";
import { getAllBooks, createBook } from "../controllers/bookController";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook); // ← NY

export default router;
