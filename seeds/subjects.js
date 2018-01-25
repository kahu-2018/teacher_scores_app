
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subjects').del()
    .then(function () {
      // Inserts seed entries
      return knex('subjects').insert([
        {id: 1, subject_name: 'Maths'},
        {id: 2, subject_name: 'Science'},
        {id: 3, subject_name: 'English'},
        {id: 4, subject_name: 'History'},
        {id: 5, subject_name: 'Geography'},
      ]);
    });
};
