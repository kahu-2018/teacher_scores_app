
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, student_name: 'Brian'},
        {id: 2, student_name: 'James'},
        {id: 3, student_name: 'Harrison'},
        {id: 4, student_name: 'Guy'},
        {id: 5, student_name: 'Edi'},
        {id: 6, student_name: 'Phuong'},
        {id: 7, student_name: 'Josh'},
        {id: 8, student_name: 'Mel'},
        {id: 9, student_name: 'Jess'},
        {id: 10, student_name: 'Hayden'},
      ]);
    });
};
