
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('scores', (table)=> {
    table.integer('subject_id')
    table.integer('student_id')
    table.integer('score')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('score') 
};
