import { connect } from "mongoose";


 const dbconnect = async () => {
    await connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pbntz.mongodb.net/lawyer-system-managment`)
  .then(() => {
    console.log('Successfully connected to the MongoDB database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
}


export default dbconnect;