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

exports.books = (req, res) => {
  try {

    res.status(200).render('study/books', {
      title: 'Livros',
      books: books.books
    });

  } catch (error) {

    res.status(400).send(error.message);
  }
}

exports.categories = (req, res) => {
  try {

    res.status(200).render('study/categories', {
      title: 'Categorias',
      categories: books.categories()
    });

  } catch (error) {

    res.status(400).send(error.message);
  }
}

exports.videos = (req, res) => {
  try {

    res.status(200).render('study/videos', {
      title: 'Vídeos'
    });

  } catch (error) {

    res.status(400).send(error.message);
  }
}