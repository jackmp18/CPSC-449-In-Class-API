import express from 'express';
import mongoose from 'mongoose';
// import routes from './routes/routes';

const app = express();

// app.use('/api/v1/', routes);

const uri = "mongodb+srv://csufuser:z9vpF6B3Yu7n4c2V@learnerbot.ifbb8ws.mongodb.net/?retryWrites=true&w=majority&appName=LearnerBot";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}

run().catch(console.dir);
