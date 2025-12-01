import { Client } from 'pg';

async function query(queryObject) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();

  try {
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
