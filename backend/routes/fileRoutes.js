const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const upload = require('../utils/multerConfig');
const { uploadFile,getUserFiles } = require('../controllers/fileController');

router.post('/upload', auth, upload.single('file'), uploadFile);
router.get('/', auth, getUserFiles);
module.exports = router;
