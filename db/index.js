import mongoose from "mongoose";
import 'dotenv/config'

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}
@cluster0.nnm56.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url);

export default mongoose;