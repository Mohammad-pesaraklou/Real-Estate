import mongoose from "mongoose";

async function ConnectDb() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.DB_URI);
  console.log("Connected to DB");
}

export default ConnectDb;
