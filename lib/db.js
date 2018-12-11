var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'dve_tvet'
    },
    debug: true,
  });

  console.log('*******db*******')
  module.exports = knex