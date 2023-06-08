require('dotenv').config({ path: '.env.development' });

import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection: process.env.POSTGRES_PRISMA_URL,
  migrations: {
    extension: 'ts',
  },
};

export default config;
