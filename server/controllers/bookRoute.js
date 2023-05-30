import express from "express";
import Book from "../models/book.js";

import slugify from "slugify";

const route = express.Router();

//enter-new-book
route.post("/newBook", async (req, res) => {
  try {
    const { title, author, no_of_pages, published_at } = req.body;
    console.log(title, author, no_of_pages, published_at)
    //validation
    switch (true) {
      case !title:
        return res.status(500).send({ message: "title is required" });
      case !author:
        return res.status(500).send({ message: "author is required" });
      case !no_of_pages:
        return res.status(500).send({ message: "no_of_pages is required" });
      case !published_at:
        return res.status(500).send({ message: "published_at is required" });
    }
    let book = new Book({ ...req.body, slug: slugify(title) });
    await book.save();
    return res.status(200).send({
      success: true,
      message: "data saved",
      book,
    });
  } catch (error) {
    console.log(error);
    error;
    return res.status(500).send({
      success: false,
      error,
      message: "error while entering new book",
    });
  }
});

//get-all-books
route.get("/getBooks", async (req, res) => {
  try {
    const books = await Book.find();
    if (books) {
      return res.status(200).send({
        success: true,
        message: "All books",
        books,
      });
    }
  } catch (error) {
    console.log(error);
    error;
    return res.status(500).send({
      success: false,
      error,
      message: "error while getting books",
    });
  }
});

//update-book
route.put("/updateBook/:id", async (req, res) => {
  try {
    const { title, author, no_of_pages, published_at } = req.body;
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(
      id,
      {
        title,
        author,
        no_of_pages,
        published_at,
        slug: slugify(title),
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "book updated successfully",
      book,
    });
  } catch (error) {
    console.log(error);
    error;
    return res.status(500).send({
      success: false,
      error,
      message: "error while updating book",
    });
  }
});

//delete-book
route.delete("/deleteBook/:id", async(req, res)=>{
    try{
        const { id } = req.params
        await Book.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "deleted successfully"
        })
    }catch(error){
        console.log(error);
        error;
        return res.status(500).send({
            success: false,
            error,
            message: "error while deleting book"
        })
    }
})
export default route;
