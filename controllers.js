app.post('/patients', async (req, res) => {
    try {
      const newPatient = await Patient.create(req.body);
      res.json(newPatient);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  

  