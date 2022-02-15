const db = require('../../data/db-config');

const checkCarId = async(req, res, next) => {
  const { id } = req.params;
  const car = await db('cars').where('id', id).first();
  if(car === []) {
    res.status(404).json({message: `car with id ${id} is not found`});
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
