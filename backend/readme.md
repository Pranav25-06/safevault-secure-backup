# SafeVault – Backend

### Description
Secure backup and file versioning backend built with Node.js, Express, and MongoDB.

### Features
- User Authentication (JWT)
- File Upload with Versioning
- File Restore & Download
- Checksum Validation

### API Routes

#### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

#### Files
- `POST /api/files/upload` (Requires JWT token)
- `GET /api/files` (List user files)
- `GET /api/files/download/:id`
- `POST /api/files/restore`

---

### .env Format
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/safevault
JWT_SECRET=your_secure_secret_key