// STRETCH
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('cars').truncate();
        // Inserts seed entries
    return knex('cars').insert([
      {vin: '1111', make: 'subaru', model: 'blue', mileage: 100},
      {vin: '2222', make: 'coup', model: 'green', mileage: 100},
      {vin: '3333', make: 'buggy', model: 'black', mileage: 100},
    ]);
  };