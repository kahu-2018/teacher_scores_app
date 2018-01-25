
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('subjects', (table)=> {
    table.increments('id')
    table.string('subject_name')
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subjects')  
};
