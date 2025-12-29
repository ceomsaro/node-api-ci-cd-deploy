// src/routes/tasks.js
const express = require('express');
const store = require('../store');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(store.getAll());
});

router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const task = store.create(title);
  res.status(201).json(task);
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = store.update(id, req.body);

  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const ok = store.remove(id);

  if (!ok) return res.status(404).json({ error: 'Task not found' });
  res.status(204).end();
});

module.exports = router;
