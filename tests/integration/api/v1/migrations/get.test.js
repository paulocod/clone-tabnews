import database from 'infra/database.js';

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("GET to /api/v1/migrations returns status 200 and correct body", async () => {
  const res = await fetch("http://localhost:3000/api/v1/migrations");
  expect(res.status).toBe(200);

  const responseBody = await res.json();
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});

test("Verify leaks using other HTTP methods on /api/v1/migrations", async () => {
  const methods = ["PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"];
  for (const method of methods) {
    const res = await fetch("http://localhost:3000/api/v1/migrations", {
      method,
    });
    expect(res.status).toBe(405);
  }
});
