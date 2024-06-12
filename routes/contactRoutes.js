const express= require('express');
const router=express.Router();
const {
    getContacts,
    createContact,
    getsinglecontact,
    updateContact,
    deleteContacts,
  } = require("../controllers/contactController");
  const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken)
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getsinglecontact).put(updateContact).delete(deleteContacts);

module.exports=router;