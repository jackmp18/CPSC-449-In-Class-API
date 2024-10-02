import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);


const uri = "mongodb+srv://csufuser:z9vpF6B3Yu7n4c2V@learnerbot.ifbb8ws.mongodb.net/?retryWrites=true&w=majority&appName=LearnerBot";

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
  } catch(err) {
    console.log(err);
    await mongoose.disconnect();
  }
}

run().catch((error) => {
    console.log(error);
});