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

// POST – skapa ny bok i databasen
export const createBook = async (req: Request, res: Response) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: "Failed to create book" });
  }
};
