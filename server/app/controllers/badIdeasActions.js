// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const badIdea = await tables.bad_idea.readAll();

    // Respond with the items in JSON format
    res.json(badIdea);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const randBrowse  = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const badIdea = await tables.bad_idea.readRandAll();

    // Respond with the items in JSON format
    res.json(badIdea);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};



// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const badIdea = await tables.bad_idea.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (badIdea == null) {
      res.sendStatus(404);
    } else {
      res.json(badIdea);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the item data from the request body
  const { id } = req.params;
  const badIdea = req.body;

  Object.entries(badIdea).forEach(([key]) => {
    if (badIdea[key] === "") {
      delete badIdea[key];
    }
  });

  const keys = Object.keys(badIdea);
  const values = Object.values(badIdea);

  console.info(badIdea);
  try {
    // Insert the item into the database
    const editId = await tables.bad_idea.update(id, keys, values);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ editId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const badIdea = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.bad_idea.create(badIdea);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  // Extract the item data from the request body

  try {
    const { id } = req.params;

    // Insert the item into the database
    const deleteId = await tables.bad_idea.delete(id);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ deleteId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// This operation is not yet implemented
// Route to add a new item

// Ready to export the controller functions
module.exports = {
  browse,
  randBrowse,
  read,
  edit,
  add,
  destroy,
};
