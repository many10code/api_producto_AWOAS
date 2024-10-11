const express = require('express');
const UserRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', UserRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>{
    console.log('SERVER IS RUNNING ON PORT' + PORT)
})