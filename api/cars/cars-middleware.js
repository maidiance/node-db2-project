const db = require('../../data/db-config');
const vin = require('vin-validator');

const checkCarId = async(req, res, next) => {
  const { id } = req.params;
  const car = await db('cars').where('id', id).first();
  if(!car) {
    res.status(404).json({message: `car with id ${id} is not found`});
  } else {
    next();
  }
}

const checkCarPayload = (req, res, next) => {
  const car = req.body;
  if(!('vin' in car)){
    res.status(400).json({message: 'vin is missing'});
  } else if (!('make' in car)) {
    res.status(400).json({message: 'make is missing'});
  } else if (!('model' in car)) {
    res.status(400).json({message: 'model is missing'});
  } else if (!('mileage' in car)) {
    res.status(400).json({message: 'mileage is missing'});
  } else {
    next();
  }
}

const checkVinNumberValid = (req, res, next) => {
  const car = req.body;
  const isValid = vin.validate(car.vin);
  if(!isValid) {
    res.status(400).json({message: `vin ${car.vin} is invalid`});
  } else {
    next();
  }
}

const checkVinNumberUnique = async(req, res, next) => {
  const car = req.body;
  const matches = await db('cars').where({vin: car.vin});
  if(matches.length >= 1){
    res.status(400).json({message: `vin ${car.vin} already exists`});
  } else {
    next();
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}