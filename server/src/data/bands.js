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

const getOneBand = (req, res) => {
    const stmt = data.db.prepare('SELECT id, name, description, link FROM bands WHERE id = ?');
    const bandId = stmt.all(req.id);
    console.log(bandId)
    return bandId;

}

module.exports = {
    getAllBands: getAllBands,
    addNewBands: addNewBands,
    deleteBand: deleteBand,
    getOneBand: getOneBand
};