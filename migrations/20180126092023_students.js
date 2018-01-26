
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('students', (table)=> {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students')
};
