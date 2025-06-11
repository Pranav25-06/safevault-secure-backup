const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const upload = require('../utils/multerConfig');
const { uploadFile,getUserFiles,downloadFile, restoreFileVersion } = require('../controllers/fileController');

router.post('/upload', auth, upload.single('file'), uploadFile);
router.get('/', auth, getUserFiles);
router.get('/download/:id', auth, downloadFile);
router.post('/restore', auth, restoreFileVersion);
module.exports = router;
