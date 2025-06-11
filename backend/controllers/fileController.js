const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const File = require('../models/File');

const uploadFile = async (req, res) => {
  try {
    const { originalname, filename, path: filePath } = req.file;
    const userId = req.user.id;

    // Generate checksum
    const fileBuffer = fs.readFileSync(filePath);
    const checksum = crypto.createHash('sha256').update(fileBuffer).digest('hex');

    // Check previous versions
    const previousFiles = await File.find({ userId, originalName: originalname });
    const version = previousFiles.length + 1;

    const newFile = new File({
      userId,
      originalName: originalname,
      storedName: filename,
      version,
      checksum
    });

    await newFile.save();
    res.status(201).json({ message: 'File uploaded', version });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
};
const getUserFiles = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("getting files for user",userId)
    const files = await File.find({ userId: userId }).sort({ createdAt: -1 });

    res.status(200).json({
      count: files.length,
      files,
    });
  } catch (error) {
    console.error("Get files error:", error);
    res.status(500).json({ error: 'Server error' });
  }
};
module.exports = { uploadFile,getUserFiles };
