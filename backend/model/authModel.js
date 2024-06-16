const joi = require('joi');


const registerSchema = joi.object({
    username: joi.string().min(3).max(32).required(),
    password: joi.string().min(3).max(32).required(),
    mail: joi.string().email().required()
});

const loginSchema = joi.object({
    mail: joi.string().email().required(),
    password: joi.string().min(3).max(32).required()
  });

  module.exports = {
    registerSchema,
    loginSchema
  }