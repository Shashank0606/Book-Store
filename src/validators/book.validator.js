import Joi from "@hapi/joi";


export const newBookValidator = (req, res, next) => {
    const schema = Joi.object({
        bookName: Joi.string().required(),
        description: Joi.string().required(),
        discountPrice: Joi.number().required(),
        bookImage: Joi.string().required(),
        quantity: Joi.number().required(),
        price: Joi.number().required(),
        admin_user_id: Joi.string().optional(),
        author: Joi.string().optional(),



    })
    const { error, value } = schema.validate(req.body);
    if (error) {
        next(error);
    } else {
        // Client side error
        next();
    }
}