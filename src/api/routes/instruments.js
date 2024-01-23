const { isAuth, isAdmin } = require("../../middlewares/auth");
const { getInstrument, getInstrumentByCategory, getInstrumentById, getInstrumentByPrice, postInstrument, putInstrument, deleteInstrument, getInstrumentAdmin } = require("../controllers/instruments");

const instrumentRouter = require("express").Router();

instrumentRouter.get("/not-verified", [isAdmin], getInstrumentAdmin);
instrumentRouter.get("/:id", getInstrumentById);
instrumentRouter.get("/category/:category", getInstrumentByCategory)
instrumentRouter.get("/price/:price", getInstrumentByPrice);
instrumentRouter.get("/", getInstrument);
instrumentRouter.post("/", [isAuth], postInstrument);
instrumentRouter.put("/:id", [isAdmin], putInstrument);
instrumentRouter.delete("/:id", [isAdmin], deleteInstrument);

module.exports = instrumentRouter;