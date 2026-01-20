const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// przykładowe dane
let items = [
  { id: 1, name: "Item 1", value: 10 },
  { id: 2, name: "Item 2", value: 20 },
  { id: 3, name: "Item 3", value: 30 },
];

// pobranie listy
app.get("/api/items", (req, res) => {
  res.json(items);
});

// aktualizacja elementu
app.put("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, value } = req.body;

  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: "Not found" });

  if (name !== undefined) item.name = name;
  if (value !== undefined) item.value = value;

  res.json(item);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));