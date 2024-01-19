const { getFamilyById, getFamily, postFamily, putFamily, deleteFamily } = require("../controllers/families");


const familyRouter = require("express").Router();

familyRouter.get("/:id", getFamilyById);
familyRouter.get("/", getFamily);
familyRouter.post("/", postFamily);
familyRouter.put("/:id", putFamily);
familyRouter.delete("/:id", deleteFamily);

module.exports = familyRouter;