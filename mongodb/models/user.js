import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name is required"] },
    email: { type: String, required: [true, "email is required"] },
    avatar: { type: String, required: [true, "avatar is required"] },
    allProperties: [{ type: mongoose.ObjectId, ref: "Property" }],
},{ timestamps: true });

const userModel = mongoose.model("User", UserSchema);

export default userModel;
