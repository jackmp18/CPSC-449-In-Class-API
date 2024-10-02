import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
    id: String, 
    isActive: Boolean,
})

const Session = mongoose.model("Session", sessionSchema);

export { Session };