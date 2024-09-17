const mongoose = require("mongoose");
const authorSchema = require("./author.schema")
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    author: { type: [String] },
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
  } ,{timestamps : true })

module.export = blogSchema;