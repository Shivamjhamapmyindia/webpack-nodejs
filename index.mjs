import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Get the current file URL and directory name
const __filename = fileURLToPath(import.meta.url); // Use `import.meta.url` to get file path
const __dirname = path.dirname(__filename); // Get directory name

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html')); // Serve the 'home.html' file
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
