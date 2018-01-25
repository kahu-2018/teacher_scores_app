
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('student_subject', (table)=> {
    table.increments('id')
    table.integer('subject_id')
    table.integer('student_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('student_subject') 
};
