
const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');


router.post('/patients', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/encounter', async (req, res) => {
    try {
      const encounter = new Encounter(req.body);
      await encounter.save();
      res.status(201).json(encounter);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.post('/vital', async (req, res) => {
    try {
      const vital = new Vital(req.body);
      await vital.save();
      res.status(201).json(vital);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


module.exports = router;
