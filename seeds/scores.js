
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {student_id: 1, subject_id: 1001, score: 90},
        {student_id: 2, subject_id: 1002, score: 80},
        {student_id: 3, subject_id: 1003, score: 70}
      ]);
    });
};
