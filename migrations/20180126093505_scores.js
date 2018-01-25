
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('scores', (table)=> {
    table.increments('id')
    table.integer('student_subject_id')
    table.integer('score')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scores') 
};
