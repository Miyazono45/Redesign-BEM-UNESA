import mongoose from "mongoose";

const { Schema } = mongoose;

const profileSchema = new Schema({
  judul: { type: String, required: true, maxlength: 50 },
  deskripsi: { type: String, required: true },
  gambar1: { type: String, required: false, maxlength: 50 },
  nama1: { type: String, required: false, maxlength: 50 },
  jabatan1: { type: String, required: false, maxlength: 50 },
  gambar2: { type: String, required: false, maxlength: 50 },
  nama2: { type: String, required: false, maxlength: 50 },
  jabatan2: { type: String, required: false, maxlength: 50 },
});

export default mongoose.models?.Profile ||
  mongoose.model("Profile", profileSchema);
