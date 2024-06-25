import express from "express";

const app = express();
const PORT = 3333;

app.use(express.json());

app.get("/", (request, response) => {
  return response.json("OK");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "test@example.com" && password === "password123") {
    return res.status(200).json({ message: "Login successful" });
  }
  return res.status(401).json({ message: "Invalid credentials" });
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  return res.status(201).json({ message: "User registered successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
