const express = require('express');
const router = express.Router();

// Importing the home_controller and file_controller
const homeController = require('../controllers/home_controller');
const fileController = require('../controllers/file_controller');

router.get('/', (req, res) => {
	res.send('<h1>Working...</h1>');
});
// Routing to the home_controller

router.get('/get', homeController.home);

// Routing to the file_controller
router.post('/add', fileController.uploadCSV);
router.get('/delete/:id', fileController.deleteCSV);
router.get('/display/:id', fileController.displayCSV);

// Exporting the router
module.exports = router;