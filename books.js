const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    maxlength: 20,
  },
  author: String,
  price: {
    type: Number,
    min: 20,
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["Fiction", "Non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);
let book1 = new Book({
  title: "Gone Girl",
  price: 100,
  category: "Fiction",
});

book1.save();
