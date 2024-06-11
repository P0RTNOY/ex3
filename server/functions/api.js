const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const controller = require("../controller/controller");
const { connectDB } = require("../db/connect");

connectDB();

router.get('/', (req, res) => {
  res.send('App is running..');
});

// Get all crises
router.get('/crises', controller.getAllCrises);

// Get crisis by ID
router.get('/crises/:id', controller.getCrisisById);

// Add new crisis
router.post('/crises/new', controller.addNewCrisis);

// Update crisis
router.put('/crises/:id', controller.updateCrisis);

// Delete crisis
router.delete('/crises/:id', controller.deleteCrisis);

app.use(express.json());

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
