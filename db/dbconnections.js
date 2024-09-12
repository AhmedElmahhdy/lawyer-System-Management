import { connect } from "mongoose";


 const dbconnect = async () => {
    await connect("mongodb://127.0.0.1:27017/E-Commerce")
  .then(() => {
    console.log('Successfully connected to the MongoDB database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
}


export default dbconnect;