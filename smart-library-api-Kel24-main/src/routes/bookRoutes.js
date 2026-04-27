import express from 'express';
import { BookController } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', BookController.getAllBooks);
router.post('/', BookController.createBook);
router.delete('/:id', BookController.deleteBook);

export default router;