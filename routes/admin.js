import express  from "express";
import userModel from '../models/students.js'
import User from '../models/user.js'
import {auth,isUser,isAdmin} from '../middleware/admin.js'
import moment from 'moment'
import AssModal from '../models/ass.js';
import StuffModal from '../models/stuff.js';
import RevisionModal from '../models/revision.js';
import heroModal from "../models/frontPage.js";
const router = express.Router();

router.get ('/total1',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await User.aggregate([
            {$match:{role:'Teacher',createdAt:{$gte:new Date(previosMonth)}},
        
        },
        {
            $project:{
            month:{$month: '$createdAt'},
        } 
        },
        {
            $group:{
                _id:'$month',
                total:{$sum:1},
            }
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

router.get ('/total',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await User.aggregate([
            {$match:{role:'Student',createdAt:{$gte:new Date(previosMonth)}},
        
        },
        {
            $project:{
            month:{$month: '$createdAt'},
        } 
        },
        {
            $group:{
                _id:'$month',
                total:{$sum:1},
            }
        }
       
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})



router.get ('/classes',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'4East',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes1',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'3East',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes2',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'1East',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes3',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'1North',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/hero',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await heroModal.aggregate([
            { $match : { createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes4',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'1South',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes5',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'1West',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes6',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'2East',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes7',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'2North',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes8',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'2South',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes9',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'2West',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes10',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'3North',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes11',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'3South',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes12',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'3West',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes13',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'4North',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/classes14',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'4South',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/stuff',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await StuffModal.aggregate([
            { $match : { role:'Secretary',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/dp',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await StuffModal.aggregate([
            { $match : { role:'Dp',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/classes15',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await AssModal.aggregate([
            { $match : { class:'4West',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/bursor',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await StuffModal.aggregate([
            { $match : { role:'Bursor',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form3east',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'3East',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/form4east',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'4East',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})






router.get ('/form4west',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'4West',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/form4south',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'4South',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form4north',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'4North',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/form3south',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'3South',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form3north',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'3North',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form3west',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'3West',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form2east',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'2East',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form2south',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'2South',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form2north',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'2North',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form2west',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'2West',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form1east',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'1East',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form1north',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'1North',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form1south',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'1South',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})

router.get ('/form1west',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await userModel.aggregate([
            { $match : { clas:'1West',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})


router.get ('/maths',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await RevisionModal.aggregate([
            { $match : { subject:'maths' ,createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})
router.get ('/english',  async (req,res)=>{
    const previosMonth=moment()
    .month(moment().month()-1)
    .set('date',1)
    .format('YYYY-MM-DD HH:mm:ss');
    // res.status(200).send(previosMonth)
    try {
        const users= await RevisionModal.aggregate([
            { $match : { subject:'English',createdAt:{$gte:new Date(previosMonth)}} },

            
            // { $match : { isAdmin : true } },
            // { $match : { supervisor : true } },
        ]);
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


})




export default router

