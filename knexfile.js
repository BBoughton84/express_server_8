// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/day8'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
}
