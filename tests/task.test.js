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

test('can create and list tasks', async () => {
  await request(app).post('/tasks').send({ title: 'Learn DevOps' });

  const res = await request(app).get('/tasks');
  expect(res.body.length).toBe(1);
});
