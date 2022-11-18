import express from 'express'
import auth from "../middleware/auth.js";

import upload from '../helpers/fileHelper.js'
import {singleFileUpload, multipleFileUpload,
     getallSingleFiles, getallMultipleFiles} from '../controllers/files.js'
const router = express.Router();

router.post("/createSingleFiles", auth,singleFileUpload );
router.post("/createMultipleFiles", auth,multipleFileUpload );
// router.post('/singleFile', upload, singleFileUpload);
// router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);


export default router;