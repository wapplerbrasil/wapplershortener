
exports.up = function(knex) {
  return knex.schema
    .table('links', async function (table) {
      table.decimal('views');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('links', async function (table) {
      table.dropColumn('views');
    })
};
