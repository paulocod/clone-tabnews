test("GET to /api/v1/status returns status 200 and correct body", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const data = await res.json();
  expect(data.updated_at).toBeDefined();

  const parsedUpdateAt = new Date(data.updated_at).toISOString();
  expect(parsedUpdateAt).toBe(data.updated_at);

  expect(data.dependencies.database.version).toEqual("17.7 (178558d)");
  expect(data.dependencies.database.max_connections).toEqual(901);
  expect(data.dependencies.database.opened_connections).toEqual(1);
});
