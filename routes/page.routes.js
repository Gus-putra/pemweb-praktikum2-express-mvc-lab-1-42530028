const express = require('express');
const router = express.Router();

// Import controller yang baru saja dibuat
const pageController = require('../controllers/page.controller');

// Petakan HTTP Method dan URL Path ke fungsi Controller
router.get('/', pageController.getBeranda);
router.get('/katalog', pageController.getKatalog);

router.post('/katalog/tambah', pageController.postTambahProduk);

module.exports = router;
