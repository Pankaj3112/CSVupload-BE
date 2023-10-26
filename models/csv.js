const mongoose = require('mongoose');

// Schema for CSV file
const csvSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    filepath: {
        type: String,
        required: true
    }
});

// Model for CSV file
const CSV = mongoose.model('CSV', csvSchema);

// Exporting the model
module.exports = CSV;