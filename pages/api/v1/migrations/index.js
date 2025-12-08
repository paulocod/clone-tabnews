import { join } from 'path';
import migrationRunner from 'node-pg-migrate';
import database from '/infra/database.js';

export default async function migrations(req, res) {
  if (!['GET', 'POST'].includes(req.method)) {
    return res.status(405).end();
  }

  const dbClient = await database.getNewClient();
  const defaultMigrationsOptions = {
    dbClient: dbClient,
    dir: join('infra' + '/migrations'),
    direction: 'up',
    dryRun: true,
    verbose: true,
    migrationsTable: 'pgmigrations',
  };

  if (req.method === 'GET') {
    const pendingMigrations = await migrationRunner({
      ...defaultMigrationsOptions,
    });
    await dbClient.end();
    return res.status(200).json(pendingMigrations);
  }

  if (req.method === 'POST') {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationsOptions,
      dryRun: false,
    });
    await dbClient.end();
    if (migratedMigrations.length > 0) {
      return res.status(201).json(migratedMigrations);
    }

    return res.status(200).json(migratedMigrations);
  }
}
