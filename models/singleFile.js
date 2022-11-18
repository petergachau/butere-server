import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const singleFileSchema = new Schema({
    fileName: {
        type: String,
       
    },
    filePath: {
        type: String,
       
    },
    fileType: {
        type: String,
       
    },
    fileSize: {
        type: String,
       
    }
}, {timestamps: true});

const FilesModal = mongoose.model("singlefile", singleFileSchema);

export default FilesModal;