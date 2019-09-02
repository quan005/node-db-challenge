exports.seed = function(knex) {
  return knex('project').insert([
    {project_name: 'Basement Reno', project_description: 'Re-doing our basement turning it into a man cave.', project_complete: false},
    {project_name: 'Weekly Meal Prep', project_description: 'Prepare meals for the full work week'},
    {project_name: 'Complete Portfolio', project_description: 'Finish my personal website, so that I can start applying for jobs', project_complete: false},
  ]);
};
