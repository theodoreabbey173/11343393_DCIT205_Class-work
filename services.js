const patientSchema = new mongoose.Schema({
    patientID: String,
    surname: String,
    othernames: String,
    gender: String,
    phoneNumber: String,
    residentialAddress: String,
    emergencyName: String,
    emergencyContact: String,
    emergencyRelationship: String
  });
  
  const encounterSchema = new mongoose.Schema({
    patientID: String,
    dateAndTime: Date,
    typeOfEncounter: String
  });
  
  const vitalsSchema = new mongoose.Schema({
    patientID: String,
    bloodPressure: String,
    temperature: String,
    pulse: String,
    spo2: String
  });
  
  const Patient = mongoose.model('Patient', patientSchema);
  const Encounter = mongoose.model('Encounter', encounterSchema);
  const Vitals = mongoose.model('Vitals', vitalsSchema);
  