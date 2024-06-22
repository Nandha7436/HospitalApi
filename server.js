const express = require('express');

const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const reportRoutes = require('./routes/reportRoutes');



const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Welcome to Employee Review');
  });
app.use('/doctors', doctorRoutes);
app.use('/patients', patientRoutes);
app.use('/reports', reportRoutes);

const PORT = 3000;

mongoose.connect('mongodb+srv://snk1311999:1ytp6gK2B4dz0kEy@nandha.zbukeuz.mongodb.net/?retryWrites=true&w=majority&appName=Nandha/issueTrackerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
