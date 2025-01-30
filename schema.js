const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        category: Joi.string().valid(
            "Event Updates",
            "Student Achievements",
            "Miscellaneous",
        ),
        image: Joi.string().allow("", null)
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        comment : Joi.string().required(),
    }).required()
});
