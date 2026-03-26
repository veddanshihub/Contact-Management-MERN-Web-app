const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");


// GET all contacts
router.get("/", async (req, res) => {

  try {

    const contacts = await Contact.find();
    res.json(contacts);

  } catch (error) {

    res.status(500).json(error);

  }

});


// ADD contact
router.post("/", async (req, res) => {

  try {

    const newContact = new Contact(req.body);

    const savedContact = await newContact.save();

    res.json(savedContact);

  } catch (error) {

    res.status(500).json(error);

  }

});


// DELETE contact
router.delete("/:id", async (req, res) => {

  try {

    await Contact.findByIdAndDelete(req.params.id);

    res.json({ message: "Contact deleted" });

  } catch (error) {

    res.status(500).json(error);

  }

});

module.exports = router;