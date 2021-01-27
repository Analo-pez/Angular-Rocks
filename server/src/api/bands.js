const bandsData = require('../data/bands');


// endpoint handler GET:/api/Users

const getBands = (req, res) => {
    const bands =
        bandsData.getAllBands();
    // console.log('GET:/api/bands > bands:', bands);
    res.json({ results: bands });
};

const getNewBands = (req, res) => {
    const bands =
        bandsData.getAllNewBands();
    res.json({ results: bands });
};


const postNewBand = (req, res) => {
    bandsData.addNewBands(req.body.name, req.body.description, req.body.link);
    res.json({ results: 'created new band' });

};




module.exports = {
    getBands: getBands,
    getNewBands: getNewBands,
    postNewBand: postNewBand,
};