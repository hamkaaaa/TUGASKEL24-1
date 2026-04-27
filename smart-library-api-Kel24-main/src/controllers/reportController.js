import { pool } from '../config/db.js';

export const reportController = async (req, res) => {
  try {
    // Query untuk mengambil data statistik [cite: 103, 114]
    const b = await pool.query("SELECT SUM(total_copies) as total FROM books");
    const a = await pool.query("SELECT COUNT(*) as total FROM authors");
    const c = await pool.query("SELECT COUNT(*) as total FROM categories");
    const l = await pool.query("SELECT COUNT(*) as total FROM loans WHERE status = 'BORROWED'");

    res.json({
      total_books: parseInt(b.rows[0].total) || 0,
      total_authors: parseInt(a.rows[0].total),
      total_categories: parseInt(c.rows[0].total),
      active_borrowed_transactions: parseInt(l.rows[0].total)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};