mongoose.connect('mongodb://localhost:27017/11343393_DCIT205_Class-work', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
