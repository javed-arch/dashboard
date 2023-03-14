import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: [true, "title is required"] },
    description: { type: String, required: [true, "description is required"] },
    propertyType: { type: String, required: [true, "propertyType is required"] },
    location: { type: String, required: [true, "location is required"] },
    price: { type: Number, required: [true, "price is required"] },
    photo: { type: String, required: [true, "photo is required"] },
    creator: { type: mongoose.ObjectId, ref: "User" },
}, { timestamps: true });

const propertyModel = mongoose.model("Property", PropertySchema);

export default propertyModel;
