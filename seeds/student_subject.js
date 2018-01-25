
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student_subject').del()
    .then(function () {
      // Inserts seed entries
      return knex('student_subject').insert([
        {id: 111, subject_id: '1001', student_id: '1'},
        {id: 112, subject_id: '1002', student_id: '1'},
        {id: 113, subject_id: '1003', student_id: '1'},
        {id: 114, subject_id: '1001', student_id: '2'},
        {id: 115, subject_id: '1002', student_id: '2'},
        {id: 116, subject_id: '1003', student_id: '2'},
        {id: 117, subject_id: '1001', student_id: '3'},
        {id: 118, subject_id: '1003', student_id: '3'},
        {id: 119, subject_id: '1004', student_id: '3'},
        {id: 120, subject_id: '1004', student_id: '4'},
        {id: 121, subject_id: '1005', student_id: '4'}
      ]);
    });
};
