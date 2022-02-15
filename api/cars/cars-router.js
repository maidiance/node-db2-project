const Cars = require('./cars-model');
const router = require('express').Router();
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware');

router.get('/', (req, res) => {
    Cars.getAll()
        .then(cars => {
            res.json(cars);
        })
        .catch(() => {
            res.status(500).json({message: 'failed to retrieve cars'});
        })
});

router.get('/:id', checkCarId, (req, res) => {
    const { id } = req.params;
    Cars.getById(id)
        .then(car => {
            res.json(car);
        })
        .catch(() => {
            res.status(500).json({message: 'failed to retrieve car'});
        })
});

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res) => {
    const car = req.body;
    Cars.create(car)
        .then(car => {
            res.status(201).json(car);
        })
        .catch(() => {
            res.status(500).json({message: 'failed to post car'});
        })
});

module.exports = router;