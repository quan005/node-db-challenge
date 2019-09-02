exports.seed = function(knex) {
  return knex('task').insert([
    { project_id: 1, task_description: 'Clean Basement', task_notes: 'Remove all of the junk sitting in the basement.'},
    { project_id: 1, task_description: 'Demolition', task_notes: 'Break down everything thats getting re-newed'},
    { project_id: 1, task_description: 'Detail Work', task_notes: 'choose all of the little details to make the basement of your dreams'},
    { project_id: 1, task_description: 'Furniture Shopping', task_notes: ''},
    { project_id: 1, task_description: 'Finish The Basement', task_notes: 'Paint the walls, Arrange the furniture, and Relaxxx.'},
    { project_id: 2, task_description: 'Decide Which Meals to Prepare', task_notes: 'Look through cookbooks to find delishes recipes'},
    { project_id: 2, task_description: 'Go Grocerey Shopping', task_notes: 'Create a shopping list and whats need to meal prep.'},
    { project_id: 2, task_description: 'Prep the Veggies', task_notes: ''},
    { project_id: 2, task_description: 'Marinate the Meats', task_notes: ''},
    { project_id: 2, task_description: 'Finish the Meals', task_notes: ''},
    { project_id: 3, task_description: 'Find Website Inspiration', task_notes: 'Look through Pinterest for portfolio inspiration'},
    { project_id: 3, task_description: 'Sketch Mockup Ideas', task_notes: ''},
    { project_id: 3, task_description: 'Design Portfolio', task_notes: ''},
    { project_id: 3, task_description: 'Code Portfolio', task_notes: ''},
  ]);
};