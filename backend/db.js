const pgp = require('pg-promise')();
const connectionString =
    "postgresql://postgres:password@localhost:5433/nutritrack"

    const db = pgp(connectionString)

    module.exports = db;
