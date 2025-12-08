import { Client } from 'pg';

async function query(queryObject) {
  let client;
  try {
    client = await getNewClient();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
  } finally {
    await client.end();
  }
}

function getSSLValues() {
  if(process.env.DATABASE_CA_CERT) {
    return {
      rejectUnauthorized: true,
      ca: process.env.DATABASE_CA_CERT,
    };
  }
  return process.env.NODE_ENV === 'production' ? true : false;
}

async function getNewClient() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: getSSLValues(),
  });
  await client.connect();
  return client;
}

export default {
  query,
  getNewClient,
};
