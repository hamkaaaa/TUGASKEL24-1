import { AuthorModel } from '../models/authorModel.js';

export const AuthorController = {
  // get authors
  async getAuthors(req, res) {
    try {
      const { name } = req.query; // Menangkap query parameter ?name=...
      const authors = await AuthorModel.getAll(name || '');
      res.json(authors);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // post author
  async addAuthor(req, res) {
    try {
      const { name, nationality } = req.body;
      const author = await AuthorModel.create(name, nationality);
      res.status(201).json(author);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  //put author
  async updateAuthor(req, res) {
    try {
      const { id } = req.params; // Mengambil ID dari URL /api/authors/:id
      const { name, nationality } = req.body;
      const updatedAuthor = await AuthorModel.update(id, name, nationality);
      
      if (!updatedAuthor) {
        return res.status(404).json({ error: "Author tidak ditemukan" });
      }
      
      res.json({
        message: "Data author berhasil diperbarui",
        data: updatedAuthor
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // delete author
  async deleteAuthor(req, res) {
    try {
      const { id } = req.params;
      const result = await AuthorModel.delete(id);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};