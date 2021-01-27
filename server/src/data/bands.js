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
        `INSERT INTO bands (name, description, link) VALUES(?, ?, ?)`
    );
    insertStmt.run(name, description, link);

};


// const deleteBand = (req, res) => {
//     const deleteStmt = data.db.prepare(`DELETE FROM newBands WHERE id = ?`, [req.params.id]);
//     deleteStmt.run(req.params.id);

// };



module.exports = {
    getAllBands: getAllBands,
    getAllNewBands: getAllNewBands,
    addNewBands: addNewBands,
    // deleteBand: deleteBand
};