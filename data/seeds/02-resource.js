exports.seed = function(knex) {
  return knex('resource').insert([
    {resource_name: 'tools'},
    {resource_name: 'laptop'},
    {resource_name: 'groceries'},
    {resource_name: 'time'}
  ]);
};
