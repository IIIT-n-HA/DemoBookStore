const express = require("express");
const book = require("../models/db");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(res);
  res.status(200).send("Welcome to Book Store");
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publisher) {
      return res.status(400).send({
        message: "Send all required fields.",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publisher: req.body.publisher,
    };
    const book = await book.create(newBook);
    return res.status(200).send(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await book.findById(id);
    return res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publisher) {
      return res.status(400).send({
        message: "Send all required fields.",
      });
    }
    const { id } = req.params;
    const book = await book.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res.status(404).status.json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book updated successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publisher) {
      return res.status(400).send({
        message: "Send all required fields.",
      });
    }
    const { id } = req.params;
    const book = await book.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res.status(404).status.json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// export default router;
module.exports = router;
