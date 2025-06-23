const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const responses = {
  "hello": "Hi there! How can I assist you?",
  "pricing": "Our basic plan starts at $9.99/month.",
  "support": "Contact us at support@example.com."
};

app.post('/generate-response', (req, res) => {
  const input = req.body.input?.toLowerCase();
  const reply = responses[input] || "Sorry, I don't have information on that.";
  console.log("Received:", input);
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
