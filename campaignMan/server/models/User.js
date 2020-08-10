//Bring in Mongoose
const mongoose = require("mongoose");

//Create mongoose schema
// const Schema = mongoose.Schema; condensed down to es6:
const {Schema} = mongoose;

const userSchema = new Schema({
  googleId: String,
  date: {type: Date, default: Date.now}
});

//Create model class and let mongo know this new collection needs to be created.
// First argument is the name of the collection
mongoose.model('users', userSchema);