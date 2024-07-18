const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import photo-related actions
const {
  browse,
  read,
  readId,
  add,
  destroy,
  edit,
} = require("../../../controllers/ideasAction");

// Route to get a list of items
router.get("/", browse);

// Route to get a list of items
router.get("/idea-id", readId);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

// Route to add a new item
router.delete("/delete/:id", destroy);

router.put("/update/:id", edit);
/* ************************************************************************* */

module.exports = router;
