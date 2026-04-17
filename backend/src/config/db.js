import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB KẾT NỐI THÀNH CÔNG");
  } catch (error) {
    console.log("Lỗi kết nối MONGODB", error);
    process.exit(1);
  }
};
