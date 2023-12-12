const { Pool } = require('pg');

// Connection string from the provided link
const connectionString = 'postgresql://postgres:6f6f-1dF44Ec64dFb*eee1bee-1GC15f@viaduct.proxy.rlwy.net:29316/railway';

// Parse the connection string
const { user, password, host, port, database } = require('pg-connection-string').parse(connectionString);

// Create a new Pool
const pool = new Pool({
  user,
  password,
  host,
  port,
  database,
});


module.exports = pool;