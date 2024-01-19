const Instrument = require("../models/instruments")

const getInstrument = async (req, res, next) => {
  try {
    const instruments = await Instrument.find();
    return res.status(200).json(instruments);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getInstrumentByCategory = async (req, res, next) => {
  try {
    const { category } = req.params
    const instruments = await Instrument.find({ category })
    return res.status(200).json(instruments)
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getInstrumentByPrice = async (req, res, next) => {
  try {
    const { price } = req.params
    const instruments = await Instrument.find({ price: { $lte: price } })
    return res.status(200).json(instruments)
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getInstrumentById = async (req, res, next) => {
  try {
    const { id } = req.params
    const instrument = await Instrument.findById(id);
    return res.status(200).json(instrument);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}
const postInstrument = async (req, res, next) => {
  try {
    const newInstrument = new Instrument(req.body);
    const instrumentSaved = await newInstrument.save()
    return res.status(201).json(instrumentSaved);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}
const putInstrument = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newInstrument = new Instrument(req.body);
    newInstrument._id = id;
    const instrumentUpdated = await Instrument.findByIdAndUpdate(id, newInstrument, { new: true, })
    return res.status(200).json(instrumentUpdated)
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}
const deleteInstrument = async (req, res, next) => {
  try {
    const { id } = req.params;
    const instrumentDeleted = await Instrument.findByIdAndDelete(id)
    return res.status(200).json(instrumentDeleted);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}
module.exports = {
  getInstrument, getInstrumentByCategory, getInstrumentByPrice, getInstrumentById, postInstrument, putInstrument, deleteInstrument
}