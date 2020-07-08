const express = require('express')
const router = express.Router()

module.exports = router

// Get all
router.get("/", (req, res) => {
  res.send("Called Get All")
})

// Get one
router.get("/:id", (req, res) => {
    res.send("Called Get One", req.params.id)
})

// Create one
router.post("/", (req, res) => {
    res.send("Called Create One")
})

// Update one
router.patch("/:id", (req, res) => {
    res.send("Called Update One", req.params.id)
})

// Delete one
router.delete("/:id", (req, res) => {
    res.send("Called Delete One", req.params.id)
})