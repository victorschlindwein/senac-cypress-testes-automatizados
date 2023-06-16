const { defineConfig } = require("cypress");
const { Pool } = require('pg')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const pool = new Pool({
        host: 'silly.db.elephantsql.com',
        user: 'ycqqubro',
        password: 'qelFE-fkCSmCyrl_-U-iSn0k-iZQWScD',
        database: 'ycqqubro',
        port: 5432
      })

      on('task', {
        removeUser(email) {
          return new Promise((resolve, reject) => {
            pool.query('DELETE FROM public.users WHERE email = $1', [email], (error, result) => {
              if (error) {
                throw Error
              }
              resolve({ success: result })
            })
          })
        }
      })

    },
    "baseUrl": "http://localhost:3000",
    "viewportWidth": 1440,
    "viewportHeight": 900
  },
});
