const Joi = require('joi')

const validateRequestBody = (req, res, next) => {

  const receiptSchema = Joi.object({
    retailer: Joi.string().required(),
    purchaseDate: Joi.date().iso().required(),
    purchaseTime: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required(),
    items: Joi.array().min(1).required(),
    total: Joi.string().pattern(/^\d+\.\d{2}$/).required(),
  });

  const { error } = receiptSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateParams = (req, res, next) => {
  const paramsSchema = Joi.object({
    id: Joi.string().pattern(/^\S+$/).required(),
  });

  const { error } = paramsSchema.validate(req.params);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = {
  validateRequestBody, validateParams
}
