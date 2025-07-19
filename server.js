const express = require('express');
const path = require('path');
const app = express();
const port = 3010; // Or any port you prefer

// Serve static files from Flutter's build/web directory
app.use(express.static(path.join(__dirname, '/web')));

// Handle SPA routing (return index.html for all routes)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/web', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});