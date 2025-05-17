const express = require ('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors')
const connectDB = require('./config/db');



const authRoutes = require('./routes/authRoutes');
const distributionRoutes = require('./routes/distributionRoutes');
const donationRoutes = require('./routes/donationRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes')
const contactRoutes = require('./routes/contactRoutes');


dotenv.config ({path: path.resolve(__dirname, "config", ".env")});
connectDB();
const app = express();
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true             
  }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/distribution', distributionRoutes);
app.use('/api/donation', donationRoutes);
app.use('/api/volunteer', volunteerRoutes);
app.use('/api', contactRoutes);



const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Server Running Succesfully at ${PORT}`);
    
})