module.exports = {

    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './data/projects.db3',
        // typeCast: function(field, next) {
        //   if (field.type == 'TINYINT' && field.length == 1) {
        //     let value = field.string();
        //     return value ? (value == '1') : null;
        //   }
        //   return(next());
        // }
      },
      fetchAsString: [ 'number'],
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
        },
      },
    }, 
  };
  