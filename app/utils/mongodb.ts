import { MongoClient } from 'mongodb';

let client;
let connectMongoDb: any;

if (process.env.NEXT_PUBLIC_MONGODB_URI) {
  client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
  connectMongoDb = client.connect();
} else {
  console.log('MongoDB URI is not defined in the environment variables.');
}

export default connectMongoDb;
