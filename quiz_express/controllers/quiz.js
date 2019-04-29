const sequelize = require("../models/index.js");

exports.index=(req,res,next)=>{
  sequelize.models.quiz.findAll()
  .then(quizzes=>{res.render('quizzes/index.ejs',{quizzes});
})
}
