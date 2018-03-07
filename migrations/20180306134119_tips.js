exports.up = function(knex, Promise) {
  return knex.schema.createTable("tips", table => {
    table.increments("id").primary();
    table.text("tip");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tips");
};
