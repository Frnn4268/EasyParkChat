const mongoose = require('mongoose')

mongoose.set('strictQuery', true); 

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
  