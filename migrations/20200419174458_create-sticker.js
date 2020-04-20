
exports.up = function(knex) {
  return knex.schema.createTable('sticker',(table)=>{
      table.increments();
      table.text('title');
      table.text('description');
      table.text('rating')
      table.text('url')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('sticker')
};
