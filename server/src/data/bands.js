'use strict';

const data = require('./index');


const getAllBands = () => {
    const stmt = data.db.prepare('SELECT * FROM bands');

    const bands = stmt.all();
    return bands.map(band => {
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


const deleteBand = (req, res) => {
    const deleteStmt = data.db.prepare(`DELETE FROM bands WHERE id=?`);
    deleteStmt.run(req.id);
};



module.exports = {
    getAllBands: getAllBands,
    addNewBands: addNewBands,
    deleteBand: deleteBand
};