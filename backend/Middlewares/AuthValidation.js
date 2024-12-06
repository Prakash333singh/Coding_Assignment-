const Joi = require("joi");

const registerValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    dob: Joi.date().iso().required().messages({
      "date.format": '"dob" must be in ISO 8601 date format (YYYY-MM-DD)',
    }),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(100).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    // Extracting the message and returning a simplified response
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(100).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad request", error });
  }
  next();
};

module.exports = {
  registerValidation,
  loginValidation,
};
