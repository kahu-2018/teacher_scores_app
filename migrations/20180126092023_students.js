
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('students', (table)=> {
    table.increments('id')
    table.string('student_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students')
};
