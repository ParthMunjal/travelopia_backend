const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const submissionSchema = new Schema({
    name: {type: String, required: true },
    email: {type: String, required: true},
    destination: {type: String, required: true},
    travelers: {type: Number, required: true},
    budget: {type: Number, required: true},
}, {
    timestamps: true,
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
