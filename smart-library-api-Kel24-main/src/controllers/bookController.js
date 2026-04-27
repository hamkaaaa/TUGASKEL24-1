import { BookModel } from '../models/bookModel.js';

export const BookController = {
  async getAllBooks(req, res) {
    try {
      const books = await BookModel.getAll();
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async createBook(req, res) {
    try {
      const newBook = await BookModel.create(req.body);
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async deleteBook(req, res) {
    try {
      const { id } = req.params; // Menangkap ID dari URL
      const deletedBook = await BookModel.delete(id);
      
      if (!deletedBook) {
        return res.status(404).json({ error: "Buku tidak ditemukan" });
      }
      
      res.json({ message: "Buku berhasil dihapus dari sistem." });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
