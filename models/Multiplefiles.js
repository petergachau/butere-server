import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const mulitipleFileSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    files: [Object]
}, {timestamps: true});
const MultipleModal = mongoose.model("multiplefile", mulitipleFileSchema );

export default MultipleModal;