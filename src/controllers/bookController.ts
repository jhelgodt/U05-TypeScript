import { Request, Response } from "express";

// Dummy-data
const books = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, title: "1984", author: "George Orwell" },
];

// GET alla böcker
export const getAllBooks = (req: Request, res: Response) => {
  res.json(books);
};
