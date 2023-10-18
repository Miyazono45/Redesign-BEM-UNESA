import mongoose from "mongoose";

const {Schema} = mongoose;

const newsSchema = new Schema({
    // _id : String,
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.models.News || mongoose.model("News",newsSchema);