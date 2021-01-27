const bandsData = require('../data/bands');


// endpoint handler GET:/api/Users

const getBands = (req, res) => {
    const bands =
        bandsData.getAllBands();
    console.log('GET:/api/bands > bands:', bands);
    res.json({ bands: bands });
};


// const getBand = (req, res) => {
//     const bandFound = bandsData.getAllBands();
//     console.log('GET:/api/user > userFound:', bandFound);
//     if (bandFound) {
//         res.json({
//             bandName: bandFound.user,
//             description: bandFound.description,

//         });
//     } else {
//         res.status(404).json({
//             error: 'user-not-found',
//             message: 'User not found'
//         });
//     }
// };

module.exports = {
    getBands: getBands,
};