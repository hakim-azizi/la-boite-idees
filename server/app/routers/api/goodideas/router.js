const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import photo-related actions
const {
  browse,
  randBrowse,
  read,
  add,
  destroy,
  edit,
} = require("../../../controllers/goodIdeasActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a list random list of items
router.get("/rand", randBrowse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

// Route to add a new item
router.delete("/delete/:id", destroy);

router.put("/update/:id", edit);

/* ************************************************************************* */

module.exports = router;
