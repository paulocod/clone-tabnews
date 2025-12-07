import { Client } from 'pg';

async function query(queryObject) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: getSSLValues(),
  });

  try {
    await client.connect();
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
  return process.env.NODE_ENV === 'development' ? false : true;
}

export default {
  query: query,
};
