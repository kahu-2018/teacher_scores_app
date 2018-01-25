
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, first_name: 'Brian', last_name: 'Ho'},
        {id: 2, first_name: 'James', last_name: 'Bryant'},
        {id: 3, first_name: 'Harrison', last_name: 'Symes'},
        {id: 4, first_name: 'Guy', last_name: 'Stapleton'},
        {id: 5, first_name: 'Edi', last_name: 'Rose'},
        {id: 6, first_name: 'Phuong', last_name: 'Ha'},
        {id: 7, first_name: 'Josh', last_name: 'Vial'},
        {id: 8, first_name: 'Mel', last_name: 'EDA'},
        {id: 9, first_name: 'Jess', last_name: 'EDA'},
        {id: 10, first_name: 'Hayden', last_name: 'EDA'},
      ]);
    });
};
