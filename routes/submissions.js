const router = require('express').Router();
let Submission = require('../models/submission.model');

router.route('/').get((request, response) => {
    Submission.find()
    .then(submissions => response.json(submissions))
    .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/add').post((request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    const destination = request.body.destination;
    const travelers = Number(request.body.travelers);
    const budget = Number(request.body.budget);

    const newSubmission = new Submission({
        name,
        email,
        destination,
        travelers, 
        budget,
    });

    newSubmission.save()
    .then(() => response.json('Submission Added!'))
    .catch(err => response.status(400).json('Error: ' + err));
});

module.exports = router;