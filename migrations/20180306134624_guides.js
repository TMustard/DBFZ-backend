exports.up = function(knex, Promise) {
  return knex.schema.createTable("guides", table => {
    table.increments("id").primary();
    table.text("name");
    table.text("guide");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("guides");
};
