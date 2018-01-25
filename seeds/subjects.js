
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subjects').del()
    .then(function () {
      // Inserts seed entries
      return knex('subjects').insert([
        {id: 1001, subject_name: 'Maths'},
        {id: 1002, subject_name: 'Science'},
        {id: 1003, subject_name: 'English'},
        {id: 1004, subject_name: 'History'},
        {id: 1005, subject_name: 'Geography'},
      ]);
    });
};
