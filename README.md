# safevault-secure-backup
SafeVault is a cloud-inspired secure file backup and restore web app built using the MERN stack. It simulates key concepts of data protection including versioned backup, tamper detection via checksums, and audit logging. This project is inspired by Druva’s mission to deliver resilient and secure cloud data management.
# 🔐 SafeVault – Secure Backup & Recovery Dashboard

SafeVault is a cloud-inspired file backup and recovery web application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It simulates key aspects of **data protection**, such as file versioning, tamper detection, and audit logs.

> ⚡ Inspired by enterprise-grade solutions like **Druva**, SafeVault is designed to showcase resilient, secure, and user-friendly backup mechanisms for modern applications.

---

## 🚀 Features

- 🔐 **JWT-based Authentication** (User/Admin roles)
- ☁️ **File Upload with Versioning**
- 🧾 **Previous Version Restore**
- 🔒 **SHA-256 Checksum for Tamper Detection**
- 📜 **Audit Logs for File Activities**
- 🧑‍💻 **Admin Dashboard to Monitor Usage**
- 🌐 **Fully Responsive UI using React.js**
- 📂 Local storage (GridFS/AWS S3 optional extension)

---

## 🧰 Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React.js, Tailwind CSS |
| Backend    | Node.js, Express.js    |
| Database   | MongoDB + Mongoose     |
| Auth       | JWT, bcryptjs          |
| Upload     | Multer + Checksum Logic|
| Deployment | Render / Vercel        |

---

## 📸 Screenshots

_Add screenshots here after frontend is complete_

---

## 🛠️ Installation

### 🔹 Backend
```bash
cd backend
npm install
npm run dev
