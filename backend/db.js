const mongoose = require('mongoose');

const MONGODB_URI ='mongodb+srv://hassanbarlas50:aRYyAnz44XssD1SF@elevator-db.kjyx5os.mongodb.net/?retryWrites=true&w=majority';

// MongoDB Atlas Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB connection error:', err));

module.exports = mongoose;
