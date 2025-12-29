// src/store.js
let tasks = [];
let idCounter = 1;

function getAll() {
  return tasks;
}

function create(title) {
  const task = { id: idCounter++, title, completed: false };
  tasks.push(task);
  return task;
}

function update(id, data) {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;

  if (data.title !== undefined) task.title = data.title;
  if (data.completed !== undefined) task.completed = data.completed;

  return task;
}

function remove(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}

function reset() {
  tasks = [];
  idCounter = 1;
}

module.exports = { getAll, create, update, remove, reset };
