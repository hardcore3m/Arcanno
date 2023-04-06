const books = require('../models/book.model')

exports.main = (req, res) => {
  try {

    res.status(200).render('reference/main', {
      title: 'Referências'
    });

  } catch (error) {
    res.status(400).send(error.message);
  }
}

exports.list = (req, res) => {
  try {

    res.status(200).render('reference/list', {
      title: 'Lista de referências',
      books:books
    });

  } catch (error) {
    res.status(400).send(error.message);
  }
}

exports.categories = (req, res) => {
  try {





  } catch (error) {
    res.status(400).send(error.message);
  }
}