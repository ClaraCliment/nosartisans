// Logique contrôle métier

const Article = require('../models/Article');

exports.createArticle = (req, res, next) => {
  const article = new Article({
    titre: req.body.titre,
    sousTitre: req.body.sousTitre,
    paragraphe1: req.body.paragraphe1,
    paragraphe2: req.body.paragraphe2,
    paragraphe3: req.body.paragraphe3,
    paragraphe4: req.body.paragraphe4,
    paragraphe5: req.body.paragraphe5,
    paragraphe6: req.body.paragraphe6,
    citation: req.body.citation,
    accroche: req.body.accroche,
    signature: req.body.signature,
  });
  article.save().then(
    () => {
      res.status(201).json({
        message: 'Article créé avec succès!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.modifyArticle = (req, res, next) => {
    Article.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Article modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };


  exports.deleteArticle = (req, res, next) => {
    Article.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Article supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.findArticle = (req, res, next) => {
    Article.findOne({ _id: req.params.id })
      .then(user => res.status(200).json(article))
      .catch(error => res.status(404).json({ error }));
  };

  exports.findAllArticles = (req, res, next) => {
    Article.find()
      .then(articles => res.status(200).json(articles))
      .catch(error => res.status(400).json({ error }));
  };