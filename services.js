const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientID: String,
  surname: String,
  othernames: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyName: String,
  emergencyContact: String,
  relationshipWithPatient: String,
});

const encounterSchema = new mongoose.Schema({
    patientID: String,
    dateAndTime: Date,
    typeOfEncounter: String
});

const vitalSchema = new mongoose.Schema({
    patientID: String,
    bloodPressure: String,
    temperature: String,
    pulse: String,
    spo2: String
});

module.exports = mongoose.model('Patient', patientSchema);
module.exports = mongoose.model('Encounter', encounterSchema);
module.exports = mongoose.model('Vital', vitalSchema);