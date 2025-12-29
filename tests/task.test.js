const request = require('supertest');
const app = require('../src/app');
const store = require('../src/store');

beforeEach(() => {
  store.reset();
});

test('health endpoint works', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
});

// Crea una tarea y las lista
test('can create and list tasks', async () => {
  await request(app).post('/tasks').send({ title: 'Learn DevOps' });

  const res = await request(app).get('/tasks');
  expect(res.body.length).toBe(1);
});

// Valida que pasa si la tarea no tiene título
test("cannot create task without title", async () => {
  const res = await request(app)
    .post("/tasks")
    .send({});

  expect(res.statusCode).toBe(400);
  expect(res.body.error).toBeDefined();
});

// valida un estado inicial correcto
test("returns empty list when no tasks exist", async () => {
  const res = await request(app).get("/tasks");

  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual([]);
});

// valida multiples peticiones
test("can handle multiple tasks", async () => {
  await request(app).post("/tasks").send({ title: "Task 1" });
  await request(app).post("/tasks").send({ title: "Task 2" });

  const res = await request(app).get("/tasks");

  expect(res.body.length).toBeGreaterThanOrEqual(2);
});

// valida que la tarea creada tiene id 
test("create task returns created task with id", async () => {
  const res = await request(app)
    .post("/tasks")
    .send({ title: "Coverage boost" });

  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty("id");
  expect(res.body.title).toBe("Coverage boost");
});

// valida que las tareas se persisten en el store 
test("tasks are persisted in store", async () => {
  await request(app).post("/tasks").send({ title: "Persist" });

  const res = await request(app).get("/tasks");

  expect(res.body.some(t => t.title === "Persist")).toBe(true);
});
