const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const badIdeasRouter = require("./badideas/router");

router.use("/bad-ideas", badIdeasRouter);

const goodIdeasRouter = require("./goodideas/router");

router.use("/bad-ideas", goodIdeasRouter);

const ideasRouter = require("./ideas/router");

router.use("/ideas", ideasRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

/* ************************************************************************* */

module.exports = router;
