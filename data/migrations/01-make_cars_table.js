exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin', 128).unique().notNullable();
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.decimal('mileage', 128).notNullable();
    tbl.string('title');
    tbl.string('transmission');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
