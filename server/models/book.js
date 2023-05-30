import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        no_of_pages: {
            integer: true,
            type: Number,
            required: true,
        },
        published_at: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true
    }
    );
const Book = mongoose.model("book", bookSchema);
export default Book;