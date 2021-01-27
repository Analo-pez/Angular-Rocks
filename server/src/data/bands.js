'use strict';

const data = require('./index');


const getAllBands = () => {
    const stmt = data.db.prepare('SELECT * FROM bands');

    const bands = stmt.all();
    return bands.map(band => {
        // ids must be a string
        band.id = band.id + '';
        return band;
    });
    // const user = stmt.get(id);
    // return stmt;
};


module.exports = {
    getAllBands: getAllBands,
};