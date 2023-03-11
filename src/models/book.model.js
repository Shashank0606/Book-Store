/* eslint-disable prettier/prettier */
//import { bool, boolean } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const booksSchema = new Schema(
    {
        bookName: {
            type: String
        },
        description: {
            type: String
        },
        discountPrice: {
            type: Number,
            required: true
        },
        bookImage: {
            type: String
        },
        admin_user_id: {
            type: String,
            required: true
        },
        author: {
            type: String
        },
        quantity: {
            type: Number,
            default: 1
        },
        price: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);


export default model('Books', booksSchema);