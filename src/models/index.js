import mongoose, { Schema } from "mongoose";

const sessionSchema = new Schema({
    id: String, 
    isActive: Boolean,
})

const Session = mongoose.model("Session", sessionSchema);

export { Session };