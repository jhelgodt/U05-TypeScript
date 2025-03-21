import { Request, Response } from "express";
import Book from "../models/bookModel";

// GET alla böcker från databasen
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};
