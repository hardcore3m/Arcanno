const locationData = require('../models/locationData.model')

exports.getEphemerid = (req, res) => {
  const location = req.query.location||"0,0"
  const date = req.query.date || Date.now();
  if (location) {
    let response = new locationData(date,location)
    res.send(response.toString());
  } else {
    res.send('A localização não está definida');
  }
};

exports.read=(req,res)=>{
  res.status(200).render('ephemeris', {
    title: 'Lista de referências',
    books:books
  });
}