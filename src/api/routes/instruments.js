const { getInstrument, getInstrumentByCategory, getInstrumentById, getInstrumentByPrice, postInstrument, putInstrument, deleteInstrument } = require("../controllers/instruments");

const instrumentRouter = require("express").Router();

instrumentRouter.get("/:id", getInstrumentById);
instrumentRouter.get("/category/:category", getInstrumentByCategory)
instrumentRouter.get("/price/:price", getInstrumentByPrice);
instrumentRouter.get("/", getInstrument);
instrumentRouter.post("/", postInstrument);
instrumentRouter.put("/:id", putInstrument);
instrumentRouter.delete("/:id", deleteInstrument);

module.exports = instrumentRouter;