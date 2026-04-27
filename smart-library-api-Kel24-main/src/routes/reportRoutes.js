import express from 'express';
// Import nama fungsi yang sudah kamu ubah tadi
import { reportController } from '../controllers/reportController.js'; 

const router = express.Router();

// Gunakan nama fungsi reportController di sini
router.get('/stats', reportController); 

export default router;