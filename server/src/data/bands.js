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
};


const getAllNewBands = () => {
    const stmt = data.db.prepare('SELECT * FROM newBands');

    const newBands = stmt.all();
    return newBands.map(band => {
        // ids must be a string
        band.id = band.id + '';
        return band;
    });
};


const addNewBands = (name, description, link) => {
    const insertStmt = data.db.prepare(
        `INSERT INTO newBands (name, description, link) VALUES(?, ?, ?)`
    );
    const bandCreated = insertStmt.run(name, description, link);
    console.log(bandCreated);
};


module.exports = {
    getAllBands: getAllBands,
    getAllNewBands: getAllNewBands,
    addNewBands: addNewBands,
};