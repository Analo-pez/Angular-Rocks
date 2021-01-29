const bandsData = require('../data/bands');



const getBands = (req, res) => {
    const bands =
        bandsData.getAllBands();
    // console.log('GET:/api/bands > bands:', bands);
    res.json({ results: bands });
};


const postNewBand = (req, res) => {
    bandsData.addNewBands(req.body.name, req.body.description, req.body.link);
    res.json({ results: 'created new band' });

};


const deleteRockBand = (req, res) => {
    bandsData.deleteBand(req.query);
    res.status(200).send({
        message: "todo ok"
    })
}


const getBandId = (req, res) => {
    const bandId = bandsData.getOneBand(req.query);
    res.json({ results: bandId });

}




module.exports = {
    getBands: getBands,
    postNewBand: postNewBand,
    deleteRockBand: deleteRockBand,
    getBandId: getBandId
};