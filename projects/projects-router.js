const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {1
            res.json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.get('/:id/shopping_list', (req, res) => {
  const {id} = req.params;

  Projects.getShoppingList(id)
  .then(list => {
    if (list.length) {
      res.json(list);
    } else {
      res.status(404).json({ message: 'Could not get the shopping list for the given recipe' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get shopping list' });
  });
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    Projects.getInstructions(id)
    .then(instructions => {
      if (instructions.length) {
        res.json(instructions);
      } else {
        res.status(404).json({ message: 'Could not find the instructions for the given recipe' })
      }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get instructions' });
    });
  });

module.exports = router;