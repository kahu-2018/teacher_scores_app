
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {id: 1231, student_subject_id: 111, score: 90},
        {id: 1232, student_subject_id: 112, score: 80},
        {id: 1233, student_subject_id: 113, score: 70},
        {id: 1234, student_subject_id: 114, score: 90},
        {id: 1235, student_subject_id: 115, score: 80},
        {id: 1236, student_subject_id: 116, score: 70},
        {id: 1237, student_subject_id: 117, score: 90},
        {id: 1238, student_subject_id: 118, score: 80},
        {id: 1239, student_subject_id: 119, score: 70}
      ]);
    });
};
