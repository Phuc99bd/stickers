const knex = require("./knex")
require('dotenv').config();

describe('CRUD stickers',()=>{
    test('',done=>{
        knex.migrate.latest()
        .then(()=>{
            return knex.seed.run();
        }).then(()=>{
            done()
        })
    })
})