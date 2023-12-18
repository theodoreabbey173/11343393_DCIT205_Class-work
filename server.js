const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4550;


mongoose.connect('mongodb://localhost:27017/healthcare', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const patientRoutes = require('./routes/patientRoutes');
app.use('/api', patientRoutes);

const emcounterRoutes = require('./routes/encounterRoutes');
app.use('/api', encounterRoutes);

const vitalRoutes = require('./routes/vitalRoutes');
app.use('/api', vitalRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


