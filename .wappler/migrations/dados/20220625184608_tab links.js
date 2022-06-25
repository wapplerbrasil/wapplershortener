
exports.up = function(knex) {
  return knex.schema
    .createTable('links', async function (table) {
      table.increments('id');
      table.string('url_full');
      table.string('url_shortener');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('links')
};
