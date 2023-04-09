const books = require('../models/book.model')

exports.main = (req, res) => {
  try {

    res.status(200).render('study/study', {
      title: 'Estudos'
    });

  } catch (error) {
    res.status(400).send(error.message);
  }
}

exports.list = (req, res) => {
  try {

    res.status(200).render('study/list', {
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